package test

import (
	"archive/zip"
	"bytes"
	"encoding/base64"
	"fmt"
	"io"
	"strings"
	"testing"
)


func TestCommBase64(t *testing.T) {
	//bts, err := base64.StdEncoding.DecodeString(comm.StaticPkg)
	bts, err := base64.StdEncoding.DecodeString(staticPkg)
	if err != nil {
		fmt.Println(err)
	}
	//fmt.Println(bts)
	buf := bytes.NewReader(bts)
	r, err := zip.NewReader(buf, buf.Size())
	for _, f := range r.File {
		nm := strings.ReplaceAll(f.Name, "\\", "/")
		var buf bytes.Buffer
		or, _ := f.Open()
		io.Copy(&buf, or)
		defer or.Close()
		asString := string(buf.Bytes())
		fmt.Println(nm)
		fmt.Println(asString)
	}
}