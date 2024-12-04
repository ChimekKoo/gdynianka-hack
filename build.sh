#!/bin/bash

set -e

workdir="$(pwd)"
distdir="$workdir/dist"
srcdir="$workdir/src"
mkdir -p "$distdir"

_build_chrome() {
    tmpdir="$(mktemp -d)"
    cd "$workdir"
    mkdir -p "$tmpdir/gdynianka_hack"
    cp -r "$srcdir"/* "$tmpdir/gdynianka_hack"
    ./manifestgen.py chrome > "$tmpdir/gdynianka_hack/manifest.json"
    cd "$tmpdir"
    zip -0 -T -r "$distdir/chrome.zip" gdynianka_hack
    rm -rf "$tmpdir"
}

_build_firefox() {
    tmpdir="$(mktemp -d)"
    cd "$workdir"
    cp -r "$srcdir"/* "$tmpdir"
    ./manifestgen.py firefox > "$tmpdir/manifest.json"
    cd "$tmpdir"
    zip -0 -T -r "$distdir/firefox.zip" *
    rm -rf "$tmpdir"
}

target="$1"
if [ -z "$target" ]; then
    _build_chrome
    _build_firefox
elif [ "$target" = "chrome" ]; then
    _build_chrome
elif [ "$target" = "firefox" ]; then
    _build_firefox
else
    echo "Usage: $0 [chrome|firefox]" > /dev/stderr
    exit 1
fi

rm -rf "$tmpdir"
