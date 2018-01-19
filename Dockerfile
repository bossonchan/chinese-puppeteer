FROM zenato/puppeteer
USER root
ADD fonts /usr/local/share/fonts
RUN fc-cache -fv
