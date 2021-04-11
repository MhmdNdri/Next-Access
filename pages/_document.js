import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    // locale is in ctx.locale

    return { ...initialProps, locale: ctx?.locale || "en" };
  }

  render = () => (
    <Html
      dir={this.props.locale === "fa" ? "rtl" : "ltr"}
      lang={this.props.locale}
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
export default MyDocument;
