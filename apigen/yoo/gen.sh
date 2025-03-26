#!/bin/bash

docfx metadata

dotnet C:/Github/YooAsset-Doc/tools/docfx/DocfxEx.dll

echo "任意键退出"
read -n 1