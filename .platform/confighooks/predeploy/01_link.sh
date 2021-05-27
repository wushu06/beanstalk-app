#!/bin/bash

if [[ -f "app/etc/env.php" ]]; then rm -f app/etc/env.php; fi; if [ -f "/mnt/efs/app/etc/env.php" ]; then cp -f /mnt/efs/app/etc/env.php app/etc/env.php; fi;
if [[ -f "auth.json" ]]; then rm -f auth.json; fi; if [ -f "/mnt/efs/auth.json" ]; then cp -f /mnt/efs/auth.json auth.json; fi;