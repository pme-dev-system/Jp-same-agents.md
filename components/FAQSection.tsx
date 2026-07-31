import React from "react";
import Section from "@/components/Section";
import CodeExample from "@/components/CodeExample";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQ() {
  const faqItems: FAQItem[] = [
    {
      question: "必須のフィールドはありますか?",
      answer:
        "ありません。AGENTS.md はただの標準的なMarkdownです。好きな見出しを自由に使ってください。エージェントは記載されたテキストを解析するだけです。",
    },
    {
      question: "指示が矛盾していたらどうなりますか?",
      answer:
        "編集対象のファイルに最も近いAGENTS.mdが優先されます。ただし、ユーザーがチャットで明示的に指示した内容がすべてに優先されます。",
    },
    {
      question: "AGENTS.mdに書かれたテストコマンドをエージェントは自動で実行しますか?",
      answer:
        "記載していれば実行します。エージェントはタスクを完了する前に、該当するプログラムによるチェックを実行し、失敗があれば修正を試みます。",
    },
    {
      question: "後から更新してもいいですか?",
      answer: "もちろんです。AGENTS.md は常に更新され続けるドキュメントとして扱ってください。",
    },
    {
      question: "既存のドキュメントをAGENTS.mdに移行するには?",
      answer: (
        <>
          <p className="mb-2">
            既存のファイルをAGENTS.mdにリネームし、後方互換性のためにシンボリックリンクを作成します。
          </p>
          <div className="w-full flex justify-center">
            <CodeExample
              code="mv AGENT.md AGENTS.md && ln -s AGENTS.md AGENT.md"
              compact
              heightClass="min-h-[48px]"
              centerVertically
            />
          </div>
        </>
      ),
    },
    {
      question: "Aiderの設定方法は?",
      answer: (
        <>
          <p className="mb-2">
            <code>.aider.conf.yml</code> でAGENTS.mdを使うようにAiderを設定します。
          </p>
          <div className="w-full flex justify-center">
            <CodeExample
              code="read: AGENTS.md"
              compact
              heightClass="min-h-[48px]"
              centerVertically
            />
          </div>
        </>
      ),
    },
    {
      question: "Gemini CLIの設定方法は?",
      answer: (
        <>
          <p className="mb-2">
            <code>.gemini/settings.json</code> でAGENTS.mdを使うようにGemini CLIを設定します。
          </p>
          <div className="w-full flex justify-center">
            <CodeExample
              code='{
  "context": {
    "fileName": "AGENTS.md"
  },
}'
              compact
              heightClass="min-h-[48px]"
              centerVertically
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <Section
      id="faq"
      title="よくある質問"
      className="py-20"
      center
      maxWidthClass="max-w-3xl"
    >
      <div className="space-y-8 max-w-4xl mx-auto">
        {faqItems.map((item, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {item.question}
            </h3>
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
