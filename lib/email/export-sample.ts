import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderOrderEmail({
  orderId,
  customer,
  items,
  shipping,
  tax,
  grandTotal,
  siteUrl = "http://localhost:3000",
}: {
  orderId: string;
  customer: { name: string; address: string; city: string; country: string; email?: string };
  items: { name: string; qty: number; price: number }[];
  shipping: number;
  tax: number;
  grandTotal: number;
  siteUrl?: string;
}) {
  const rows = items
    .map(
      (i) =>
        `<tr>
          <td style="padding:8px 0;">${escapeHtml(i.name)} × ${i.qty}</td>
          <td style="padding:8px 0;text-align:right;">₦${(i.price * i.qty).toLocaleString()}</td>
        </tr>`
    )
    .join("");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#f7f7f7;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden">
      <tr>
        <td style="background:#101010;color:#fff;padding:16px 24px;font-weight:bold;letter-spacing:.08em;text-transform:uppercase;">
          Audiophile
        </td>
      </tr>
      <tr>
        <td style="padding:24px">
          <h2 style="margin:0 0 8px;font-size:20px;color:#101010;">Thanks, ${escapeHtml(
            customer.name
          )}!</h2>
          <p style="margin:0 0 16px;color:#444">Your order <strong>${orderId}</strong> is confirmed.</p>

          <h3 style="margin:16px 0 8px;font-size:16px;color:#101010;">Items</h3>
          <table role="presentation" width="100%" style="border-collapse:collapse">
            ${rows}
          </table>

          <hr style="margin:16px 0;border:none;border-top:1px solid #eee"/>

          <table role="presentation" width="100%" style="color:#101010;">
            <tr><td>Shipping</td><td style="text-align:right">₦${shipping.toLocaleString()}</td></tr>
            <tr><td>Tax</td><td style="text-align:right">₦${tax.toLocaleString()}</td></tr>
            <tr><td style="padding-top:6px"><strong>Total</strong></td>
                <td style="padding-top:6px;text-align:right"><strong>₦${grandTotal.toLocaleString()}</strong></td></tr>
          </table>

          <p style="margin:16px 0 0;color:#444">
            Ship to: ${escapeHtml(customer.address)}, ${escapeHtml(
    customer.city
  )}, ${escapeHtml(customer.country)}
          </p>

          <p style="margin:24px 0 0">
            <a href="${siteUrl}/order/${orderId}"
               style="display:inline-block;background:#D87D4A;color:#fff;text-decoration:none;padding:10px 16px;border-radius:6px">
              View your order
            </a>
          </p>

          <p style="margin:24px 0 0;color:#777;font-size:12px">If you have questions, reply to this email.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

const html = renderOrderEmail({
  orderId: "test_order_123",
  customer: { 
    name: "Sandra", 
    address: "Ijanikin", 
    city: "Lagos", 
    country: "Nigeria", 
    email: "you@example.com" 
  },
  items: [
    { name: "XX99 Mark II Headphones", qty: 2, price: 2999 },
    { name: "ZX9 Speaker", qty: 1, price: 4500 },
  ],
  shipping: 5000,
  tax: Math.round((2999 * 2 + 4500) * 0.075),
  grandTotal: 2999 * 2 + 4500 + 5000 + Math.round((2999 * 2 + 4500) * 0.075),
  siteUrl: "https://your-domain.vercel.app",
});

// Create emails directory if it doesn't exist
try {
  mkdirSync(join(process.cwd(), "emails"), { recursive: true });
} catch {
  // Directory already exists
}

writeFileSync(join(process.cwd(), "emails", "order-confirmation.html"), html);
console.log("✅ Saved: emails/order-confirmation.html");
