module.exports = {
    // テストするファイルのパターンを指定する
    testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  
    // テストランナーの設定
    testRunner: "jest-circus/runner",
  
    // モックの自動クリーンアップを有効にする
    clearMocks: true,
  
    // コンソールログを出力しないようにする
    verbose: false,
  
    // テストカバレッジを計測する
    collectCoverage: true,
  
    // テストカバレッジの結果を出力するディレクトリを指定する
    coverageDirectory: "coverage",
  
    // テストカバレッジの集計単位をファイルごとに指定する
    coverageReporters: ["json", "text", "lcov", "clover"],
  
    // テスト実行前に行う初期化処理を指定する
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  };