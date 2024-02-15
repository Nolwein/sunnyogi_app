# Pin npm packages by running ./bin/importmap

# pin "application"

pin "application", preload: true
pin "@rails/actiontext", to: "actiontext.js"
pin "@rails/activestorage", to: "activestorage.js"
pin "@rails/ujs", to: "rails.js"
pin "@rails/webpacker", to: "webpacker.js"
pin "trix", to: "trix.js"
pin_all_from "app/javascript/packs", under: "packs"
pin_all_from "app/javascript", under: "javascript"
pin "react", to: "react.js"
pin "react-dom", to: "react-dom.js"
