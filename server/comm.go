package server

import (
	"github.com/gin-gonic/gin"
	"github.com/gokins/gokins/util"
)

const prefix_path = "/jjenkins"
const static_font_path = "/gokinsui/font"
const static_css_path = "/gokinsui/css"
const static_imgs_path = "/gokinsui/imgs"
const static_plugs_path = "/gokinsui/plugs"

const static_dist_path = "/gokinsui/v2dist"
const static_index_path = "/gokinsui/index"

const favicon = "favicon.ico"
const static_favicon_path = "/gokinsui/" + favicon

const install_html = "templates/install.html"

var static_font_dir = gin.Dir("."+static_font_path, false)
var static_css_dir = gin.Dir("."+static_css_path, false)
var static_imgs_dir = gin.Dir("."+static_imgs_path, false)
var static_plugs_dir = gin.Dir("."+static_plugs_path, false)
var static_favicon_dir = "." + static_favicon_path

var static_dist_dir = gin.Dir("."+static_dist_path, false)
var static_index_dir = "." + static_index_path

// 参考GinRegController,只因util.GinRegController 这个方法不支持统一路由分组
func regController(g *gin.RouterGroup, gc util.GinController) {
	var gp *gin.RouterGroup

	if len(gc.GetPath()) > 1 {
		gp = g.Group(gc.GetPath())
	}
	gc.Routes(gp)
}
