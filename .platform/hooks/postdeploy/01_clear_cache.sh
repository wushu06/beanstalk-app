#!/bin/bash

sudo -u webapp /usr/bin/php -dmemory_limit=2G bin/magento cache:flush
find /dev/shm -type d -name 'mage-' -exec rm {} \;