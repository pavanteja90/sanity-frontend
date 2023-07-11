import htm from "htm";
import vhtml from "vhtml";
import { PortableTextHtmlComponents, PortableTextMarkComponent, toHTML, uriLooksSafe } from "@portabletext/to-html";

const html = htm.bind(vhtml);

const myPortableTextComponents: Partial<PortableTextHtmlComponents> = {
  types: {
    image: ({ value }: { value: any }) => (html`<img src="${value.imageUrl}" />`) as string,
    callToAction: ({ value, isInline }: { value: any; isInline: any }) =>
      isInline
        ? (html`<a href="${value.url}">${value.text}</a>`) as string
        : (html`<div class="callToAction">${value.text}</div>`) as string,
  },

  marks: {
    link: ({ children, value }: { children: any; value?: any }) => {
      // ⚠️ `value.href` IS NOT "SAFE" BY DEFAULT ⚠️
      // ⚠️ Make sure you sanitize/validate the href! ⚠️
      const href = value.href || "";

      if (uriLooksSafe(href)) {
        const rel = href.startsWith("/") ? undefined : "noreferrer noopener";
        return (html`<a href="${href}" rel="${rel}">${children}</a>`) as string;
      }

      // If the URI appears unsafe, render the children (eg, text) without the link
      return children;
    },
  },
};

export const parseToHTML = (richTextContent: any) => {
  const htmlContent = toHTML(richTextContent, { components: myPortableTextComponents })
  return htmlContent;
}
