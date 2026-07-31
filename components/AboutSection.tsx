import Section from "@/components/Section";

const AboutSection = () => (
  <Section title="概要" className="pb-0" center maxWidthClass="max-w-3xl">
    <p className="max-w-3xl">
      AGENTS.md は、AIソフトウェア開発エコシステム全体の協力によって生まれました。
      その中には{" "}
      <a href="https://openai.com/codex/" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">OpenAI Codex</a>、{" "}
      <a href="https://ampcode.com" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Amp</a>、{" "}
      <a href="https://jules.google" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">GoogleのJules</a>、{" "}
      <a href="https://cursor.com" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Cursor</a>、そして{" "}
      <a href="https://factory.ai" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Factory</a>が含まれます。
    </p>

    <p className="max-w-3xl mt-4">
      私たちは、どのコーディングエージェントを使っていても開発者コミュニティ全体の
      役に立つオープンな形式として、これを維持・発展させていくことに取り組んでいます。
    </p>

    <p className="max-w-3xl mt-4">
      AGENTS.md は現在、Linux Foundation傘下の{" "}
      <a href="https://aaif.io" className="underline hover:no-underline">
        Agentic AI Foundation
      </a>{" "}
      によって運営されています。{" "}
      <a
        href="https://openai.com/index/agentic-ai-foundation/"
        className="underline hover:no-underline"
      >
        詳しく見る &rarr;
      </a>
    </p>

  </Section>
);

export default AboutSection;
