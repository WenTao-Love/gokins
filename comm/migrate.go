package comm

import (
	"bytes"
	"compress/gzip"
	"fmt"
	"io"
	"strings"
)

func bindata_read(data []byte, name string) ([]byte, error) {
	gz, err := gzip.NewReader(bytes.NewBuffer(data))
	if err != nil {
		return nil, fmt.Errorf("Read %q: %v", name, err)
	}

	var buf bytes.Buffer
	_, err = io.Copy(&buf, gz)
	gz.Close()

	if err != nil {
		return nil, fmt.Errorf("Read %q: %v", name, err)
	}

	return buf.Bytes(), nil
}

var _mysql_000001_gokins_down_sql = []byte("\x1f\x8b\x08\x00\x00\x00\x00\x00\x00\xff\x8c\xd0\x41\xaa\xc2\x30\x10\xc6\xf1\xfd\x3b\x45\xee\xd1\xd5\x13\x2b\x14\x04\xc5\x76\xe1\x6e\x1a\xed\x18\x06\x33\x49\xc8\x24\x82\xb7\x97\x0a\x2e\x9d\xb8\xfe\xff\x98\xf0\x65\x7b\x3a\x1c\xcd\xf4\xbf\xd9\xf7\x66\xd8\x99\xfe\x3c\x8c\xd3\x68\xe6\x02\x97\x4a\x7e\x99\xbb\xbf\x6f\xfd\xca\x0b\x78\x0a\xa8\x10\x29\xd6\xe9\x1d\x93\x92\x19\x45\xf4\x03\x31\x3b\xbd\x42\xa2\xa4\x1d\x58\x73\x63\xc4\x87\xc0\xc3\xe6\x9f\x18\x66\xa1\x18\x34\x6a\xb3\x65\xa5\x57\x41\xed\xa5\x35\x03\x85\x5b\x6c\x19\xfd\x77\xde\x84\xa5\x49\x4a\xbc\xa3\xb6\xe6\xc9\x1e\x92\xaf\x8e\x5a\xa8\x20\x27\x6f\x0b\xce\xdd\x2b\x00\x00\xff\xff\x0c\xf7\x78\x5d\x73\x02\x00\x00")

func mysql_000001_gokins_down_sql() ([]byte, error) {
	return bindata_read(
		_mysql_000001_gokins_down_sql,
		"mysql/000001_gokins.down.sql",
	)
}

var _mysql_000001_gokins_up_sql = []byte("\x1f\x8b\x08\x00\x00\x00\x00\x00\x00\xff\xec\x5a\x5f\x6f\x53\x47\x16\x7f\xcf\xa7\x18\xf1\x62\x47\x4a\x90\x1d\x08\x0b\xd9\x97\x0d\xe0\x45\xde\x0d\xce\x2a\x38\xbb\x20\x21\x5d\x8f\x7d\x27\xf6\xc0\xbd\x73\xaf\x66\xc6\x4e\xf2\xe6\x68\x4b\x0b\xa5\x15\xa0\x52\x28\xa2\xb4\xcd\x13\xaa\x44\x1b\x1e\x68\x1e\x9c\xa8\x7c\x18\x62\x27\x79\xe2\x2b\x54\x73\xff\xc4\xd7\xf7\x8f\x67\xae\x31\x90\xaa\xf8\x01\x92\x99\x33\xc7\x67\x7e\xe7\x77\xce\xfc\x66\xe0\xc2\x52\x61\xbe\x5c\x00\xe5\xf9\xf3\x0b\x05\x50\xe1\x5a\xb5\x89\x0d\xbd\x02\xb2\x13\x00\x54\xb0\x5e\x01\x2d\x48\x6b\x0d\x48\xb3\x67\x4e\x4f\x82\xd2\x62\x19\x94\x96\x17\x16\xa6\xc4\xa4\x8d\x6d\x64\x60\x82\xb4\x88\xd5\xf2\xc2\x02\xb8\x58\xf8\xe7\xfc\xf2\x42\x9c\x79\x0b\x51\x86\x2d\xa2\xb8\x8c\x71\xc8\x9b\xac\x6f\x99\xcf\xe5\x62\x4c\xc1\x85\xc5\xcb\x97\x0b\xa5\x32\xc8\xf4\x7e\xf8\xac\xbb\xd3\xd9\xff\x72\xbb\xd7\xde\xc8\x38\x1e\x10\xa5\x16\xed\x3b\x98\x95\x38\x38\x7c\xf8\xe4\x60\x6b\x6b\xef\xf5\x66\x6f\x63\xcb\x73\xd0\x42\x84\xab\x47\xb0\xd7\xb9\xbb\xb7\xb3\x9d\xf1\xa3\xa7\x1c\xe9\x15\xa0\x43\x8e\x38\x36\x51\x76\xf8\xda\xee\x6e\xbb\xfb\xfc\x6e\xef\xf1\xf6\xe1\xe3\x57\xae\x87\x15\x4c\x30\x6b\xa4\x70\xb1\xbf\xf3\x4d\xef\xd9\x8f\x41\x17\x35\x8a\x60\xaa\x20\x6e\x3f\xed\xee\x74\x82\x1e\x9a\xb6\x9e\xca\x43\xef\xe9\xab\xde\xa3\x97\x41\x0f\x5e\xd2\xfb\x28\xce\xcc\xce\x0e\xdf\xc6\x9d\xdb\xbd\xef\x5f\x38\x8b\xff\xb3\x54\xbc\x3c\xbf\x74\x0d\xfc\xbb\x70\x0d\x64\x05\x27\x27\xc1\xf2\x95\x62\xe9\x12\x38\x5f\x5e\x2a\x14\x26\x26\xff\x3e\x11\xe6\x70\xcd\xd4\x35\xc1\x35\x15\x1a\xd7\xa9\xd5\xb4\x15\xc9\xe8\xd4\x86\x32\x71\x91\xaa\xdb\x30\xc7\x67\xe3\xd0\x75\x2c\x49\xd3\xac\x00\x4c\x78\x36\x9f\x4f\x32\xa9\x59\x3a\x92\xdb\x10\xee\x70\x9a\xa3\x35\x1e\x18\x56\x22\x4a\x0a\x62\xa7\x61\xf0\x68\x99\x66\x1c\xd6\x95\xd2\x9c\xbe\xfd\x04\xe8\xfc\xdb\x46\xef\xe5\xab\xfd\xce\x6b\xac\x67\x46\xe0\xc1\x47\x6f\x60\x04\x9a\x48\xbd\xf2\xba\xf7\xbf\xee\xfe\xf2\xd8\x5d\xa9\x63\x66\x1b\x70\x5d\x53\xf1\xf0\xa9\xe1\x05\x3d\x30\x8b\x72\x59\x19\x7a\xe4\x95\xc3\x3a\x4a\x5d\x20\x5b\xa5\x2c\x52\x32\xb9\x3e\x78\xda\x4b\xb9\x1c\x2e\x9c\xd4\x7c\x1a\x6b\xd9\xba\xa0\xa8\xb1\xf8\x5d\x6b\x76\x74\xcd\x80\xd6\x30\xd7\x24\x5d\x3c\x50\xed\xed\x76\xf7\x8b\xce\xfe\x4f\xef\xa7\x57\xc8\xe2\x0e\xf6\x8a\x4f\xa5\x3f\x06\xad\x23\x12\x88\xeb\xc4\xa2\x0a\x67\xb8\x69\x42\xa2\xb3\xf0\x21\xbe\x0a\x31\x67\x15\x70\x83\x59\x24\x40\x68\x79\x37\x4a\xdf\x63\x4c\xc4\x98\xe2\xe9\x0b\xc5\xec\xf9\xe2\xa5\x62\xa9\x7c\x34\x01\xe6\x97\xcb\x8b\x5a\xb1\x74\x61\xa9\x20\x60\x70\xc1\x4f\x51\xde\xdd\x7b\x0f\x0e\xdb\x1b\x07\xed\x5b\x6f\x77\x6f\x77\xef\x6d\xed\xff\xdc\x79\xbb\x7b\xc7\x05\x91\x63\x6e\xa8\xf5\x97\x23\x25\x64\x58\xa4\x3e\x08\x24\x5f\xb7\x91\x92\x28\x4b\x21\x9b\x30\x59\xb1\x22\x19\x6b\x52\x43\x56\xb1\xd1\x04\x09\x44\xa7\x80\x52\x9e\x2c\x5a\xff\xb0\x39\x8a\x13\x1d\x89\xdb\xaa\xe8\x88\xd5\x2a\xa0\x5c\xb8\x5a\x4e\x3a\x03\x9a\x55\x03\xd7\x2a\xa0\x58\x2a\x67\xc3\xec\xcd\x05\xf8\x70\xeb\x45\x77\xb7\x7d\x7c\xda\x80\x8e\x0c\xe4\x78\x70\xca\x2e\x1c\x77\xd0\x44\x13\xfe\x53\xcb\xe3\x04\x06\x08\xc3\x62\xe9\x62\xe1\xaa\x9b\xa9\xac\xf3\xa7\x0a\x47\x34\x71\xd6\x7a\x44\x71\xb8\x50\xc5\x75\x11\xfa\x4c\x6e\x72\x28\x1f\xc4\x52\xf5\x27\x80\x54\x07\xf8\xc3\xed\xbd\x9d\xed\xbd\x4e\x27\x4d\x52\x47\xa4\x4c\x14\xdb\x24\x54\xbd\xfd\x66\xfd\x1f\xa4\xd8\xfa\x1a\x46\xa5\x08\x23\xc5\x25\xab\x2b\xd1\xda\xa2\x25\x95\x2c\xb3\x92\x15\x96\xe8\x77\x32\x63\x71\xaa\x68\x91\x9e\xe9\x4c\xad\x9b\x46\xc2\x0c\xac\xd5\x10\x63\x1a\xb7\x6e\xa2\xf0\xa1\x18\xf9\x82\x81\x5e\x98\x60\xc2\x10\x55\x02\x21\x54\x7f\xbe\x41\x26\x97\x19\x52\x7c\xa9\xcf\x45\x90\x94\x6e\xed\x48\x07\xc8\xd3\x4e\x9a\x66\x15\xd1\x81\x92\x1b\xa6\x34\x7b\x2f\x36\x7b\xdf\xbe\x0c\x28\xcd\xb0\x56\x1d\xa6\x32\xed\x26\x6b\xbc\x69\x6f\xd8\xf4\x4d\x7b\x83\x58\x1c\x79\xea\xad\x01\x95\x99\x92\x8a\x56\x23\x71\x51\x5a\x05\xf1\x1a\x4b\x7e\xbc\xc7\x37\x92\x21\xe4\xe1\x98\xac\x27\x10\xc8\xa6\x9a\x24\x6f\x8e\x19\x45\xb6\xa5\xd5\x0c\x8b\x20\x4d\xce\xee\xf4\x2a\xcc\x86\x14\x9a\x23\xb4\x6d\x15\xa1\x9f\x52\x4c\xe9\x90\xc3\xb0\xb8\x11\xf0\xb2\x91\xce\x36\xe9\xce\x45\x23\x18\xa7\xb0\x51\x46\xc4\x86\x8c\x29\x01\x42\x70\xed\xa6\x92\x47\xd8\x82\x1c\x4a\xef\x6d\x69\x4f\x41\xc3\xaa\x63\xa2\x2a\x2e\x2a\xb0\xc6\x71\x0b\x25\xb5\x4b\x65\xf5\x39\x3d\x0d\xa6\x87\x7c\x26\x8a\xa5\x2b\x85\xa5\xb2\x38\x99\x17\x1d\x7e\xb8\x69\x9c\xf8\xef\xfc\xc2\x72\xe1\xca\x04\x70\xf2\x09\xc0\x09\xa8\x9b\x98\x9c\x98\x72\x7e\xc9\xbb\x7f\x65\x9c\xb1\x8c\xf7\x0b\xca\xe7\xa0\x5e\x3b\x75\xee\xf4\xb9\x2a\x9c\x3d\x07\xab\x55\x34\x7b\x06\xe5\x66\xff\xb6\x32\x93\x5b\x39\x7b\xf6\x14\xf2\xed\xf6\x7f\xdd\xdc\xbf\xff\x79\xf7\xc1\x77\xde\x80\xbf\x5f\x00\x4a\x8b\xff\xcb\x4e\x86\x07\xf3\x13\x00\x28\xec\x02\x44\xda\xbe\xd8\x86\x26\xf4\x7d\xc5\xdb\xc2\x50\x52\x0a\x16\x35\x2c\x12\xe6\x5b\x38\x29\xa2\xbf\x9b\x10\x1b\x21\x21\x1d\x63\x56\xc5\x94\x37\x74\xb8\x3e\xa4\xa9\x39\xbd\xc8\x84\xf4\xa6\x5b\xa3\x7e\x18\x88\x9a\x5e\x29\x85\x32\x1f\x8c\x55\x18\x39\xf7\x08\x89\x8d\xab\x21\x13\x8d\xa2\xed\xcd\x85\x3b\x16\xcc\xa3\x7b\x4b\xba\xce\xa6\x7c\x45\x49\xa3\x5d\x53\x15\x9e\x0f\x06\xd4\x4d\xa9\x04\x0d\xd3\xd3\x5d\x49\x57\xe5\x0b\x77\x1f\x1d\xfc\xfe\xa0\xf7\xec\xff\x87\x4f\xee\x0f\xac\x45\x6b\x48\xae\x7c\x7b\x77\x9e\x1f\x6c\x7e\x35\xb0\x5a\x41\x01\xcb\x6e\x16\x03\x36\x56\xa2\x48\x1e\x74\x65\x1d\xf9\x9a\x02\xf1\x9a\x3a\x99\x22\x26\x0b\x51\x44\xde\xe6\x53\xbe\x32\x0c\xde\x41\x00\xa8\x98\xec\x3d\x51\x86\x22\xa8\x73\x53\xcd\xd6\x7f\xa0\x8c\x7d\xd1\xc9\x79\x46\xf2\x0b\x68\xfa\x2b\xe8\x58\x68\x32\x24\xa1\xde\x25\x61\xf4\xaa\x0f\x5a\x27\x80\x37\x78\xd1\x49\x7c\xd7\x11\xed\xc1\x46\x44\xfe\xde\xed\x19\xab\xbe\x69\x47\x74\xc1\x50\x53\x75\x65\x10\xb9\x69\x1d\x09\xb1\x78\xb6\xad\x50\xc4\x1a\x4a\xb6\x68\xcd\xc6\x14\x31\x0d\x93\x64\x7c\x73\x21\x5b\x65\x3e\xf5\x23\x51\x5e\x91\xaa\xac\x9c\x0d\x86\xdf\xdc\x1c\xb6\xc4\xbc\xc5\xbd\x87\x2e\xe8\x52\x28\xeb\xff\xa0\x50\x08\xfd\x0b\x24\xa4\x63\x2a\x85\xb8\x13\x4a\xf5\xae\xa5\xf6\xe6\x20\xee\x64\xd0\x68\x2a\x98\xb9\x1a\x24\x2c\xa0\xe3\x22\xf4\x1e\x71\xa2\x82\x34\xf6\x05\x47\x7e\x87\x00\x20\x7a\x5b\x5f\x37\x0d\xcd\x36\x9a\x75\x3c\x6a\xd7\x19\xc4\x26\x01\xc0\xc4\xc7\x11\xf9\x3b\x85\xfa\x4b\x85\x12\x00\x51\xfd\x1d\x40\x20\x00\x40\x70\x77\x31\x9b\x08\xc5\x1e\x17\xa8\xf3\x6d\x21\x59\xef\x2b\x79\xd6\xf0\xe5\x39\x70\x3e\xd3\x80\x71\x64\xcf\x01\xd6\x40\x86\xf1\x0f\xd6\xb8\x4e\x80\xf7\xf1\x9e\x0f\x4a\xd0\x44\x62\xba\x3f\x41\x22\x23\xfe\xbf\x88\xcc\xf5\x87\x84\x67\x54\x6b\x58\x40\xf8\xb5\xc0\xaa\x45\x0d\xdd\xfb\xe6\x5c\x5f\xf9\xbb\x65\xf8\x51\x81\x99\xf1\xe0\xa8\xc2\xe1\xd0\x88\xf9\x04\x70\x06\xa7\x48\xcc\xd8\x9f\x19\xa0\x53\x1e\x28\xb6\xb5\x8a\xa8\x83\xc5\x30\x98\xfa\x56\x09\x60\xc5\x19\x90\xc4\x99\x77\x04\x2e\xae\xe7\x70\x64\xda\x06\xe4\xe8\xaf\xd7\x75\x22\x08\x7c\xb0\xae\x73\xc9\x32\x20\xa9\xfb\xbc\xf1\x9e\x10\xe7\x40\xfe\x64\xee\x3a\x69\x41\x2a\xd2\xeb\xfc\x1f\x07\x37\xcf\x82\x51\xb0\x8e\xbc\x9c\x0f\x96\x5a\x13\x1b\xba\x3b\x4e\xc2\x03\x82\x86\x7d\xa2\x28\x36\xb6\xba\x35\xed\xb8\x98\xce\x47\x2a\xb8\xef\x59\x7c\x10\x69\xcd\x49\x79\x59\xb7\xdc\x65\xc0\x84\x98\x9c\xac\x5b\xa3\x06\x33\x13\x0e\x86\x23\xc6\xd3\xc7\x22\x56\x81\xe9\xd6\x75\xa2\xd0\x58\x3e\x3c\x39\xfc\xce\xfb\x2f\xd8\x82\xc7\x91\x1a\x37\x60\x0b\x8e\x93\x1c\x66\x8b\x80\x9a\x81\x20\x89\x0e\x63\xb1\xc7\x7e\xdf\x4b\x1f\xe0\x38\x08\x23\x02\xf1\x18\x73\x2c\xf9\xe2\x1f\x44\x25\xdb\x3c\x8e\x74\x21\xb6\x39\x4e\xb6\x10\xdb\x0c\xaf\x7b\x37\xb6\xf4\xe3\x8b\x90\xc5\xd1\xfb\xc1\x85\xca\x11\x7a\x2b\x41\x02\x61\xfe\x08\x00\x00\xff\xff\xd5\x70\x06\x88\xe3\x2e\x00\x00")

func mysql_000001_gokins_up_sql() ([]byte, error) {
	return bindata_read(
		_mysql_000001_gokins_up_sql,
		"mysql/000001_gokins.up.sql",
	)
}

var _sqlite_000001_gokins_down_sql = []byte("\x1f\x8b\x08\x00\x00\x00\x00\x00\x00\xff\x72\x09\xf2\x0f\x50\x08\x71\x74\xf2\x71\x55\xf0\x74\x53\x70\x8d\xf0\x0c\x0e\x09\x56\x48\x28\x89\x4f\x2a\xcd\xcc\x49\x49\xb0\x06\x04\x00\x00\xff\xff\xaa\x8a\x92\x63\x1f\x00\x00\x00")

func sqlite_000001_gokins_down_sql() ([]byte, error) {
	return bindata_read(
		_sqlite_000001_gokins_down_sql,
		"sqlite/000001_gokins.down.sql",
	)
}

var _sqlite_000001_gokins_up_sql = []byte("\x1f\x8b\x08\x00\x00\x00\x00\x00\x00\xff\x8c\xd1\xcf\x4a\xc4\x30\x10\xc7\xf1\xfb\x3e\xc5\x1c\x15\x7c\x03\x4f\xd1\x1d\x61\x31\xbb\x4a\xc9\x82\x7b\x6a\xa2\x19\x75\xa0\xcd\x86\xcc\xb4\xcf\x2f\xc5\x3f\x28\x36\xa5\xe7\xdf\x87\x84\x2f\x73\xdb\xa0\x71\x08\xce\xdc\x58\x04\xaf\xed\xf3\xc0\x5d\xf4\x70\xb1\x01\xf0\x1c\x3d\x38\x7c\x72\x70\x78\x70\x70\x38\x5a\x0b\x8f\xcd\x6e\x6f\x9a\x13\xdc\xe3\xe9\x6a\x12\x99\x33\x75\x9c\xa8\xfd\xa1\x5b\xbc\x33\x47\xfb\xc9\xff\x92\x91\x8a\xf0\x39\x2d\x50\xd1\xa0\x83\xd4\x56\x2a\xe5\x5c\xaa\xe3\x48\x49\x6b\xa3\x72\x4f\xad\x68\xe8\xb3\x87\xad\x71\xe8\x76\x7b\x9c\x53\xda\xd1\x77\xf0\x14\xfb\x4f\xf4\x24\x12\xde\x96\x8d\x68\x28\x4a\xf1\xd7\x47\xf3\xee\x95\x13\xcb\xfb\x0a\xf8\x52\x28\xac\x79\x70\xc8\x71\x95\xfb\x3a\x43\x2d\x62\x73\x79\xfd\x11\x00\x00\xff\xff\x55\x1f\xab\xd7\x13\x02\x00\x00")

func sqlite_000001_gokins_up_sql() ([]byte, error) {
	return bindata_read(
		_sqlite_000001_gokins_up_sql,
		"sqlite/000001_gokins.up.sql",
	)
}

// Asset loads and returns the asset for the given name.
// It returns an error if the asset could not be found or
// could not be loaded.
func Asset(name string) ([]byte, error) {
	cannonicalName := strings.Replace(name, "\\", "/", -1)
	if f, ok := _bindata[cannonicalName]; ok {
		return f()
	}
	return nil, fmt.Errorf("Asset %s not found", name)
}

// AssetNames returns the names of the assets.
func AssetNames() []string {
	names := make([]string, 0, len(_bindata))
	for name := range _bindata {
		names = append(names, name)
	}
	return names
}

// _bindata is a table, holding each asset generator, mapped to its name.
var _bindata = map[string]func() ([]byte, error){
	"mysql/000001_gokins.down.sql": mysql_000001_gokins_down_sql,
	"mysql/000001_gokins.up.sql": mysql_000001_gokins_up_sql,
	"sqlite/000001_gokins.down.sql": sqlite_000001_gokins_down_sql,
	"sqlite/000001_gokins.up.sql": sqlite_000001_gokins_up_sql,
}
// AssetDir returns the file names below a certain
// directory embedded in the file by go-bindata.
// For example if you run go-bindata on data/... and data contains the
// following hierarchy:
//     data/
//       foo.txt
//       img/
//         a.png
//         b.png
// then AssetDir("data") would return []string{"foo.txt", "img"}
// AssetDir("data/img") would return []string{"a.png", "b.png"}
// AssetDir("foo.txt") and AssetDir("notexist") would return an error
// AssetDir("") will return []string{"data"}.
func AssetDir(name string) ([]string, error) {
	node := _bintree
	if len(name) != 0 {
		cannonicalName := strings.Replace(name, "\\", "/", -1)
		pathList := strings.Split(cannonicalName, "/")
		for _, p := range pathList {
			node = node.Children[p]
			if node == nil {
				return nil, fmt.Errorf("Asset %s not found", name)
			}
		}
	}
	if node.Func != nil {
		return nil, fmt.Errorf("Asset %s not found", name)
	}
	rv := make([]string, 0, len(node.Children))
	for name := range node.Children {
		rv = append(rv, name)
	}
	return rv, nil
}

type _bintree_t struct {
	Func func() ([]byte, error)
	Children map[string]*_bintree_t
}
var _bintree = &_bintree_t{nil, map[string]*_bintree_t{
	"mysql": &_bintree_t{nil, map[string]*_bintree_t{
		"000001_gokins.down.sql": &_bintree_t{mysql_000001_gokins_down_sql, map[string]*_bintree_t{
		}},
		"000001_gokins.up.sql": &_bintree_t{mysql_000001_gokins_up_sql, map[string]*_bintree_t{
		}},
	}},
	"sqlite": &_bintree_t{nil, map[string]*_bintree_t{
		"000001_gokins.down.sql": &_bintree_t{sqlite_000001_gokins_down_sql, map[string]*_bintree_t{
		}},
		"000001_gokins.up.sql": &_bintree_t{sqlite_000001_gokins_up_sql, map[string]*_bintree_t{
		}},
	}},
}}
