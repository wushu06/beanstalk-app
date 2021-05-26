#!/bin/bash

if [ -f app/etc/env.php ]; then chown webapp:webapp app/etc/env.php && chmod 664 app/etc/env.php; fi;