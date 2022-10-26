FROM ianwalter/puppeteer:latest
WORKDIR /WebdriverIO
ADD . /WebdriverIO
RUN npm install
CMD npx wdio