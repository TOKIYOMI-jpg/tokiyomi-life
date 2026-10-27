# モバイルストア準備ブランチ
基準: Claude Version 36.16。Web公開版のindex.htmlは変更しない。

npm ci
npm run build
npm run check
npx cap add android
npx cap add ios

既に生成した端末プロジェクトには npm run android / npm run ios で同期する。
AndroidはAndroid Studio、iOSはmacOS/Xcodeで開いてビルドする。
appIdは仮。公開前に販売者と登録可能性を確認する。
生成済みのandroid/iosは現段階ではgit管理対象外。固有のネイティブ修正を始める前に方針を変更し、両ディレクトリを追跡すること。
課金と署名は未実装。wwwは再生成可能。docs/STORE_READINESS.mdに発売前の課題を記録。
