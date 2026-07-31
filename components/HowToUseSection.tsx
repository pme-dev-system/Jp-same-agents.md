import Section from "@/components/Section";
import React from "react";

export default function HowToUseSection() {
  const steps = [
    {
      title: "AGENTS.mdを追加する",
      body: (
        <>
          リポジトリのルートにAGENTS.mdファイルを作成します。多くの
          コーディングエージェントは、丁寧にお願いすれば雛形を作ってくれます。
        </>
      ),
    },
    {
      title: "重要な項目をカバーする",
      body: (
        <>
          <p className="mb-2">エージェントがプロジェクトで効果的に作業できるようなセクションを追加します。よく使われる項目:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>プロジェクトの概要</li>
            <li>ビルド・テストコマンド</li>
            <li>コードスタイルのガイドライン</li>
            <li>テストの実行方法</li>
            <li>セキュリティ上の注意点</li>
          </ul>
        </>
      ),
    },
    {
      title: "追加の指示を書く",
      body: "コミットメッセージやプルリクエストのガイドライン、セキュリティ上の落とし穴、大きなデータセット、デプロイ手順など、新しいチームメンバーに伝えるようなことは、ここにも書いておきましょう。",
    },
    {
      title: "大きなモノレポの場合はサブプロジェクトごとにネストしたAGENTS.mdを使う",
      body: (
        <>
          各パッケージの中に別のAGENTS.mdを置きます。エージェントはディレクトリツリー内で最も近いファイルを自動的に読み込むため、最も近いものが優先され、各サブプロジェクトはそれぞれに合わせた指示を提供できます。例えば、執筆時点でOpenAIのメインリポジトリには88個のAGENTS.mdファイルがあります。
        </>
      ),
    },
  ];


  return (
    <Section
      title="AGENTS.mdの使い方"
      className="py-12"
      center
      maxWidthClass="max-w-3xl"
    >
      <div className="space-y-6 text-left">
        {steps.map((s, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {idx + 1}. {s.title}
            </h3>
            <div className="text-gray-700 dark:text-gray-300">
              {s.body}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
