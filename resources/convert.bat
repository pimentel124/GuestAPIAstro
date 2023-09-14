@echo off
START cmd.exe /k "npx npx widdershins --environment src/assets/env.json src/assets/openapi3_0.json -o src/content/docs/guides/guestapi.md & exit"