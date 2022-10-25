package migrates

import (
	"errors"
	"fmt"
)

func notInitDbSupport(db string) (rtul string, errs error) {
	return rtul, errors.New(fmt.Sprintf("[init] database %s not supported: %s", db, rtul))
}

func notUpDbSupport(db string, ul string) error {
	return errors.New(fmt.Sprintf("[update] database %s not supported: %s", db, ul))
}
