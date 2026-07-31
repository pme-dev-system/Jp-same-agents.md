import Section from "@/components/Section";
import React from "react";
import ClipboardIcon from "@/components/icons/ClipboardIcon";
import UserIcon from "@/components/icons/UserIcon";
import LinkIcon from "@/components/icons/LinkIcon";

export default function WhySection() {
  return (
    <Section
      id="why"
      title="なぜAGENTS.mdが必要なのか?"
      className="pt-24 pb-12"
      center
      maxWidthClass="max-w-3xl"
    >
      <div className="space-y-4">
        <p className="mb-4">
          README.md は人間向けのファイルです。クイックスタートやプロジェクトの説明、
          コントリビューションのガイドラインなどが書かれています。
        </p>
        <p className="mb-4">
          AGENTS.md はそれを補完し、コーディングエージェントが必要とする追加の、
          時に詳細な文脈を提供します。ビルド手順やテスト、規約など、READMEに書くと
          煩雑になったり、人間のコントリビューターには関係のない情報です。
        </p>
        <p className="mb-4">あえて別ファイルにしたのは、次の理由からです。</p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <ClipboardIcon />
            <p>
              <span className="font-semibold block">
                エージェントに、指示を書くための明確で予測しやすい場所を用意する。
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <UserIcon />
            <p>
              <span className="font-semibold block">
                README は簡潔にとどめ、人間のコントリビューター向けに集中させる。
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <LinkIcon />
            <p>
              <span className="font-semibold block">
                既存のREADMEやドキュメントを補完する、エージェント向けの
                的確なガイダンスを提供する。
              </span>
            </p>
          </div>
        </div>
        <p>
          独自仕様のファイルを新たに作るのではなく、誰にでも使える名前と形式を
          選びました。コーディングエージェントを開発・利用していて役に立つと
          感じたら、ぜひ採用してください。
        </p>
      </div>
    </Section>
  );
}
