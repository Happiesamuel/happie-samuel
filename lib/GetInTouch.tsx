import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Link,
  Heading,
} from "@react-email/components";

interface GetInTouchEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function GetInTouchEmail({
  name,
  email,
  subject,
  message,
}: GetInTouchEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {name} via your portfolio</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logoMark}>{"</>"}</Text>
            <Text style={logoText}>Happie</Text>
          </Section>

          <Section style={card}>
            <Heading style={heading}>New Contact Message</Heading>
            <Text style={subheading}>
              You&apos;ve received a new message from your portfolio contact
              form.
            </Text>

            <Hr style={divider} />

            <Section style={fieldRow}>
              <Text style={label}>From</Text>
              <Text style={value}>{name}</Text>
            </Section>

            <Section style={fieldRow}>
              <Text style={label}>Email</Text>
              <Link href={`mailto:${email}`} style={valueLink}>
                {email}
              </Link>
            </Section>

            <Section style={fieldRow}>
              <Text style={label}>Subject</Text>
              <Text style={value}>{subject}</Text>
            </Section>

            <Hr style={divider} />

            <Section style={messageBox}>
              <Text style={label}>Message</Text>
              <Text style={messageText}>{message}</Text>
            </Section>

            <Section style={ctaRow}>
              <Link
                href={`mailto:${email}?subject=Re: ${subject}`}
                style={ctaButton}
              >
                Reply to {name.split(" ")[0]}
              </Link>
            </Section>
          </Section>

          <Text style={footer}>
            Sent from the contact form at happiesamuel.dev
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

/* ---------- Styles ---------- */

const main = {
  backgroundColor: "#050807",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  padding: "40px 0",
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
};

const header = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "24px",
  paddingLeft: "4px",
};

const logoMark = {
  display: "inline-block",
  color: "#4ade80",
  fontSize: "16px",
  fontWeight: "700",
  fontFamily: "monospace",
  margin: "0",
};

const logoText = {
  display: "inline-block",
  color: "#f4f4f5",
  fontSize: "16px",
  fontWeight: "700",
  margin: "0 0 0 6px",
};

const card = {
  backgroundColor: "#0d1512",
  border: "1px solid rgba(34,197,94,0.15)",
  borderRadius: "20px",
  padding: "32px 28px",
  backgroundImage:
    "radial-gradient(circle at 20% 0%, rgba(34,197,94,0.10) 0%, transparent 55%)",
};

const heading = {
  color: "#f4f4f5",
  fontSize: "20px",
  fontWeight: "700",
  margin: "0 0 6px",
};

const subheading = {
  color: "#9ca3af",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "0 0 20px",
};

const divider = {
  borderColor: "rgba(255,255,255,0.08)",
  margin: "20px 0",
};

const fieldRow = {
  marginBottom: "14px",
};

const label = {
  color: "#4ade80",
  fontSize: "11px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  margin: "0 0 4px",
};

const value = {
  color: "#e5e7eb",
  fontSize: "14px",
  margin: "0",
};

const valueLink = {
  color: "#4ade80",
  fontSize: "14px",
  textDecoration: "none",
};

const messageBox = {
  backgroundColor: "rgba(0,0,0,0.25)",
  borderRadius: "12px",
  padding: "16px 18px",
  marginTop: "4px",
};

const messageText = {
  color: "#e5e7eb",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "6px 0 0",
  whiteSpace: "pre-wrap" as const,
};

const ctaRow = {
  marginTop: "24px",
  textAlign: "center" as const,
};

const ctaButton = {
  display: "inline-block",
  backgroundColor: "#22c55e",
  color: "#050807",
  fontSize: "14px",
  fontWeight: "700",
  textDecoration: "none",
  padding: "12px 28px",
  borderRadius: "999px",
};

const footer = {
  color: "#6b7280",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "24px",
};
