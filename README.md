# cables daplaya

a simple offline player for [cables](https://cables.gl) patches using the electron framework.

can be used on different platforms (win, osx, linux) to use cables patches offline after importing them through daplaya.

## features:
* import your patches by using patchid and apikey
* copy whole directory to usb stick and run from there
* cables integrations should work as expected (i.e. midi-ops)
* runs on windows, osx and linux (all 64 bit architecture)
* might be useful to circumvent browser restrictions for external inputs

## usage
* download the appropriate zip file from the [releases page](https://github.com/cables-gl/cables-daplaya/releases)
* create an apikey in [cables](https://cables.gl/settings) (apikeys) (try to use one per instance)
* find the patch you want to export and copy the id from the URL (or the whole url, who cares...)
* extract the zipfile somewhere on your computer (i.e. an usb stick)
* start daplaya (win: daplaya.exe, osx: daplaya.app, linux: ./daplaya)
* you will see a default patch with a cables logo
* press `ctrl-n` to enter apikey and patchid, wait for export
* press `escape` for fullscreen

## keyboard commands (also availabe via menu)
* `alt` to toggle the menu
* `esc` to toggle fullscreen
* `ctrl-n` to import a new patch
* `ctrl-r` to synchronize the patch with the version in the cables editor (reimport)
* `ctrl-o` open filebrowser to open patches that you have exported manually from cables
  
# building
* building requires you have run `./update_electron.sh <version>` before
* `npm run clean`to clean up nodemodules and preimported patches and settings
* `npm run build:linux` build linux app in build/linux-x64
* `npm run build:win` build linux app in build/win32-x64
* `npm run build:osx` build linux app in build/darwin-x64

# releases
* releases will try to update electron and build all three platforms as well as the corresponding zipfiles
* this is usually done by travis on committing a "semver"-tag
* `npm run package`

# dev
* for development, check out this repository, run `npm run build:<yourplatform>` then `npm run start:<yourplatform>
* no code "hotswap" (yet)

# LICENCE

The MIT License (MIT)

Copyright (c) 2019-present undefined development

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.