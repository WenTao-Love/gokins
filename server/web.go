package server

import (
	"net/http"
	"strings"
	"time"

	"github.com/gokins/gokins/util/httpex"

	"github.com/gin-gonic/gin"
	"github.com/gokins/core"
	"github.com/gokins/gokins/comm"
	"github.com/gokins/gokins/route"
	"github.com/gokins/gokins/util"
	hbtp "github.com/mgr9525/HyperByte-Transfer-Protocol"
	"github.com/sirupsen/logrus"
)

func runWeb() {
	defer func() {
		if err := recover(); err != nil {
			hbtp.Errorf("Web recover:%v", err)
		}
	}()
	comm.WebEgn = gin.Default()
	comm.WebEgn.StaticFS(prefix_path+static_font_path, static_font_dir)
	comm.WebEgn.StaticFS(prefix_path+static_css_path, static_css_dir)
	comm.WebEgn.StaticFS(prefix_path+static_imgs_path, static_imgs_dir)
	comm.WebEgn.StaticFS(prefix_path+static_plugs_path, static_plugs_dir)
	comm.WebEgn.StaticFS(prefix_path+static_dist_path, static_dist_dir)
	comm.WebEgn.StaticFile(prefix_path+static_favicon_path, static_favicon_dir)
	comm.WebEgn.StaticFile("/"+favicon, static_favicon_dir)
	comm.WebEgn.StaticFile(prefix_path+static_index_path, static_index_dir+".html")

	comm.WebEgn.LoadHTMLFiles(install_html)
	comm.WebEgn.Use(midUiHandle)
	err := comm.WebEgn.Run(comm.WebHost)
	if err != nil {
		logrus.Errorf("Web err:%v", err)
		//comm.HbtpEgn.Stop()
	}
	comm.Cancel()
	time.Sleep(time.Millisecond * 100)
}

func regApi() {
	if core.Debug {
		comm.WebEgn.Use(util.MidAccessAllowFun)
	}
	apiprefix := comm.WebEgn.Group(prefix_path)

	regController(apiprefix, &route.ApiController{})
	regController(apiprefix, &route.ArtifactController{})
	regController(apiprefix, &route.ArtPublicController{})
	regController(apiprefix, &route.LoginController{})
	regController(apiprefix, &route.UserController{})
	regController(apiprefix, &route.OrgController{})
	regController(apiprefix, &route.PipelineController{})
	regController(apiprefix, &route.PipelineVersionController{})
	regController(apiprefix, &route.RuntimeController{})
	regController(apiprefix, &route.YmlController{})
	regController(apiprefix, &route.TriggerController{})
	regController(apiprefix, &route.HookController{})
}
func midUiHandle(c *gin.Context) {
	c.Next()
	if c.Writer.Status() != http.StatusNotFound || c.Writer.Size() > 0 {
		return
	}
	pth := c.Request.URL.Path
	if !comm.Installed && !strings.HasPrefix(pth, "/gokinsui/") && pth != "/install" {
		httpex.ResMsgUrl(c, "未安装,跳转中...", "/install")
		return
	}
	//r, err := getFile(pth[1:])
	//if err != nil {
	//	r, err = getFile("index.html")
	//}
	//if err != nil {
	//	//c.String(404, "rdr err:"+err.Error())
	//	httpex.ResMsgUrl(c, "未找到内容,跳转中...", "/")
	//	return
	//}
	//rd, err := r.Open()
	//if err != nil {
	//	//c.String(500, "open err:"+err.Error())
	//	httpex.ResMsgUrl(c, "内容有误,跳转中...", "/")
	//	return
	//}
	//defer rd.Close()
	//c.Writer.Header().Set("Cache-Control", "max-age=360000000")
	//
	//ext := filepath.Ext(r.Name)
	//if ext == ".html" {
	//	c.Writer.Header().Set("Cache-Control", "no-cache")
	//	c.Writer.Header().Set("Pragma", "no-cache")
	//	c.Writer.Header().Set("Expires", "0")
	//	c.Writer.Header().Set("Content-Type", "text/html")
	//} else if ext == ".css" {
	//	c.Writer.Header().Set("Content-Type", "text/css")
	//} else if ext == ".js" {
	//	c.Writer.Header().Set("Content-Type", "application/javascript")
	//} else if ext == ".svg" {
	//	c.Writer.Header().Set("Content-Type", "image/svg+xml")
	//} else if ext == ".woff2" {
	//	//c.Writer.Header().Set("Content-Type", "image/svg+xml")
	//} else if ext == ".ttf" || ext == ".ttc" {
	//	c.Writer.Header().Set("Content-Type", "application/x-font-ttf")
	//}
	//c.Status(200)
	//bts := make([]byte, 1024)
	//for !hbtp.EndContext(c) {
	//	n, err := rd.Read(bts)
	//	if n <= 0 {
	//		break
	//	}
	//	c.Writer.Write(bts[:n])
	//	if err != nil {
	//		break
	//	}
	//}
}

//var rder *zip.Reader // Deprecated

// Deprecated
//func getRdr() (*zip.Reader, error) {
//	if rder != nil {
//		return rder, nil
//	}
//	bts, err := base64.StdEncoding.DecodeString(comm.StaticPkg)
//	if err != nil {
//		return nil, err
//	}
//	buf := bytes.NewReader(bts)
//	r, err := zip.NewReader(buf, buf.Size())
//	if err != nil {
//		return nil, err
//	}
//	rder = r
//	return rder, nil
//}

// Deprecated
//func getFile(pth string) (*zip.File, error) {
//	if pth == "" {
//		return nil, errors.New("param err")
//	}
//	//println("getFile:" + pth)
//	r, err := getRdr()
//	if err != nil {
//		return nil, err
//	}
//	for _, f := range r.File {
//		nm := strings.ReplaceAll(f.Name, "\\", "/")
//		//println(fmt.Sprintf("find zip file:%s, %s",pth, nm))
//		if pth == nm {
//			return f, nil
//		}
//	}
//	return nil, errors.New("file not found")
//}
