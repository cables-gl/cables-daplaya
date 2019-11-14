#!/bin/bash
set -euo pipefail

electron_version=${1?missing electron version as first parameter};
platforms=(linux-x64 darwin-x64 win32-x64);
download_and_unzip() {
    wget -q --show-progress https://github.com/electron/electron/releases/download/v${electron_version}/${1} && unzip -q ${1} && rm -f ${1}
}

for platform in "${platforms[@]}"; do
    mkdir -p $platform;
    cd $platform;
    skip=false;
    if [ -f ./version ]; then
        current_version=`cat version`;
        if [[ "${current_version}" == "${electron_version}" ]]; then
            echo "skipping ${platform}, same version (${current_version})";
            cd ..
            continue;
        fi
    fi
    rm -rf *;
    zipname=electron-v${electron_version}-${platform}.zip
    download_and_unzip $zipname
    cd ..
done