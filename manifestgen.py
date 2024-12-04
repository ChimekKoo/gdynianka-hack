#!/usr/bin/env python3

import json
import sys

BASE_FILE = "manifest/base.json"
TARGET_FILE = {target: f"manifest/{target}.json" for target in ["chrome", "firefox"]}
VERSION_KEY = "version"
VERSION_FILE = "VERSION"


def generate_manifest(target: str) -> dict:
    with open(BASE_FILE, "r", encoding="utf-8") as file:
        base_manif = json.load(file)
    with open(TARGET_FILE[target], "r", encoding="utf-8") as file:
        target_manif = json.load(file)
    with open(VERSION_FILE, "r", encoding="utf-8") as file:
        version = file.read().strip()
    return base_manif | {VERSION_KEY: version} | target_manif


if __name__ == "__main__":
    if len(sys.argv) != 2 or sys.argv[1] not in TARGET_FILE:
        print(f"Usage: {sys.argv[0]} <{'|'.join(TARGET_FILE.keys())}>", file=sys.stderr)
        sys.exit(1)
    manif = generate_manifest(sys.argv[1])
    print(json.dumps(manif, indent=2))
