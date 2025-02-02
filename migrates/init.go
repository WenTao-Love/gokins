package migrates

import (
	"database/sql"
	"errors"
	"fmt"
	gmysql "github.com/go-sql-driver/mysql"
	"github.com/gokins/gokins/comm"
	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/mysql"
	"github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	bindata "github.com/golang-migrate/migrate/v4/source/go_bindata"
	"strings"
	"time"
)

func InitMysqlMigrate(host, dbs, user, pass string) (wait bool, rtul string, errs error) {
	wait = false
	if host == "" || dbs == "" || user == "" {
		errs = errors.New("database config not found")
		return
	}
	wait = true
	conf := gmysql.Config{
		User:   user,
		Passwd: pass,
		Addr:   host,
		DBName: dbs,
		//Params:    nil,
		//Collation: "",
		Loc: time.Local,
		//MaxAllowedPacket:        0,
		//ServerPubKey:            "",
		//TLSConfig:               "",
		//Timeout:                 0,
		//ReadTimeout:             0,
		//WriteTimeout:            0,
		//AllowAllFiles:           false,
		//AllowCleartextPasswords: false,
		//AllowNativePasswords:    false,
		//AllowOldPasswords:       false,
		//CheckConnLiveness:       false,
		//ClientFoundRows:         false,
		//ColumnsWithAlias:        false,
		//InterpolateParams:       false,
		MultiStatements: true,
		ParseTime:       true,
		//RejectReadOnly:          false,
	}
	mdriver, err := gmysql.NewConnector(&conf)
	//ul := fmt.Sprintf("%s:%s@tcp(%s)/%s?parseTime=true&multiStatements=true",
	//	user,
	//	pass,
	//	host,
	//	dbs)
	db, err := sql.Open("mysql", ul)
	if err != nil {
		errs = err
		return
	}
	db := sql.OpenDB(mdriver)
	err = db.Ping()
	if err != nil {
		db.Close()
		//uls := fmt.Sprintf("%s:%s@tcp(%s)/?parseTime=true&multiStatements=true",
		//	user,
		//	pass,
		//	host)
		//db, err = sql.Open("mysql", uls)
		//if err != nil {
		//	println("open dbs err:" + err.Error())
		//	errs = err
		//	return
		//}
		defer db.Close()
		_, err = db.Exec(fmt.Sprintf("CREATE DATABASE `%s` DEFAULT CHARACTER SET utf8mb4;", dbs))
		if err != nil {
			println("create dbs err:" + err.Error())
			errs = err
			return
		}
		db.Exec(fmt.Sprintf("USE `%s`;", dbs))
		err = db.Ping()
	}
	defer db.Close()
	wait = false
	if err != nil {
		errs = err
		return
	}

	// Run migrations
	driver, err := mysql.WithInstance(db, &mysql.Config{})
	if err != nil {
		println("could not start sql migration... ", err.Error())
		errs = err
		return
	}
	defer driver.Close()
	var nms []string
	tms := comm.AssetNames()
	for _, v := range tms {
		if strings.HasPrefix(v, "mysql") {
			nms = append(nms, strings.Replace(v, "mysql/", "", 1))
		}
	}
	s := bindata.Resource(nms, func(name string) ([]byte, error) {
		return comm.Asset("mysql/" + name)
	})
	sc, err := bindata.WithInstance(s)
	if err != nil {
		errs = err
		return
	}
	defer sc.Close()
	mgt, err := migrate.NewWithInstance(
		"bindata", sc,
		"mysql", driver)
	if err != nil {
		errs = err
		return
	}
	defer mgt.Close()
	err = mgt.Up()
	if err != nil && err != migrate.ErrNoChange {
		mgt.Down()
		errs = err
		return
	}

	return false, ul, nil
}

func InitSqliteMigrate() (rtul string, errs error) {
	//ul := filepath.Join(comm.WorkPath, "db.dat")
	//db, err := sql.Open("sqlite3", ul)
	//if err != nil {
	//	errs = err
	//	return
	//}
	//defer db.Close()
	//
	//// Run migrations
	//driver, err := sqlite3.WithInstance(db, &sqlite3.Config{})
	//if err != nil {
	//	println("could not start sql migration... ", err.Error())
	//	errs = err
	//	return
	//}
	//defer driver.Close()
	//var nms []string
	//tms := comm.AssetNames()
	//for _, v := range tms {
	//	if strings.HasPrefix(v, "sqlite") {
	//		nms = append(nms, strings.Replace(v, "sqlite/", "", 1))
	//	}
	//}
	//s := bindata.Resource(nms, func(name string) ([]byte, error) {
	//	return comm.Asset("sqlite/" + name)
	//})
	//sc, err := bindata.WithInstance(s)
	//if err != nil {
	//	errs = err
	//	return
	//}
	//defer sc.Close()
	//mgt, err := migrate.NewWithInstance(
	//	"bindata", sc,
	//	"sqlite3", driver)
	//if err != nil {
	//	errs = err
	//	return
	//}
	//defer mgt.Close()
	//err = mgt.Up()
	//if err != nil && err != migrate.ErrNoChange {
	//	mgt.Down()
	//	errs = err
	//	return
	//}
	//
	//return ul, nil
	return notInitDbSupport("sqlite3")
}

func InitPostgresMigrate(host, dbs, user, pass string) (wait bool, rtul string, errs error) {
	wait = false
	if host == "" || dbs == "" || user == "" {
		errs = errors.New("database config not found")
		return
	}
	wait = true
	ul := fmt.Sprintf("postgres://%s:%s@%s/%s?sslmode=disable", user, pass, host, dbs)
	db, err := sql.Open("postgres", ul)
	if err != nil {
		errs = err
		return
	}
	err = db.Ping()
	if err != nil {
		db.Close()
		errs = err
		return
	}
	defer db.Close()
	wait = false
	if err != nil {
		errs = err
		return
	}

	// Run migrations
	driver, err := postgres.WithInstance(db, &postgres.Config{})
	if err != nil {
		println("could not start sql migration... ", err.Error())
		errs = err
		return
	}
	defer driver.Close()
	var nms []string
	tms := comm.AssetNames()
	for _, v := range tms {
		if strings.HasPrefix(v, "postgres") {
			nms = append(nms, strings.Replace(v, "postgres/", "", 1))
		}
	}
	s := bindata.Resource(nms, func(name string) ([]byte, error) {
		return comm.Asset("postgres/" + name)
	})
	sc, err := bindata.WithInstance(s)
	if err != nil {
		errs = err
		return
	}
	defer sc.Close()
	mgt, err := migrate.NewWithInstance(
		"bindata", sc,
		"postgres", driver)
	if err != nil {
		errs = err
		return
	}
	defer mgt.Close()
	err = mgt.Up()
	if err != nil && err != migrate.ErrNoChange {
		mgt.Down()
		errs = err
		return
	}

	return false, ul, nil
}
