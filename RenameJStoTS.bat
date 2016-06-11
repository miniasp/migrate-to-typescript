@echo off

FOR /F "tokens=1,2 delims==" %%A IN ('dir /s /b public\js\*.js server\*.js') DO (
    ECHO rename %%A %%~nA.ts
    rename %%A %%~nA.ts
)

