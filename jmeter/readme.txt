2015/2/6 a.ide

プロキシのURLとポート番号、IDとパスワードは管理者へ確認。



2014/10/21 a.ide

jmeter

実行準備

・2014/10/7の記事参照


実行方法

proxy経由での実行
・jmeterAide_proxy.bat

または

・jmeter.bat(jmeterAide.bat)の実行時に以下オプションを指定する。

  jmeterAide.bat -H PROXY_SERVER -P PROXY_PORT -u USERID -a PASSWORD





2014/10/7 a.ide

jmeter
・apache-jmeter-2.11.zip  ...ブツ
・jmeterAide.bat
  →JREのパスを有効にしたbatファイル(自作)
    javaが実行できる環境の場合はこのファイルは不要


インストールと実行
1. zipファイルを適当なディレクトリで展開する。

2. jmeterAide.batの中のPATH設定を、JREがインストール先へ修正する。
  ※javaが実行できる場合は、2と3は不要。

3. jmeterAide.batをjmeter展開先/binへコピーする。

4. dos窓を開く

5. jemter展開先/bin配下へ移動する。cd jmeter/bin

6. jmeterAide.bat(またはjmeter.bat)を実行する。





