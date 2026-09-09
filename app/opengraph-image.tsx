import { ImageResponse } from "next/og";

export const alt =
  "ValGo - Your Favorite Campus Meals Delivered in 15 Minutes | OOU Ago Iwoye Campus Pilot";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#081226",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(31, 82, 196, 0.45), transparent 45%), radial-gradient(circle at 85% 80%, rgba(245, 158, 11, 0.22), transparent 40%), radial-gradient(circle at 50% 50%, rgba(10, 22, 40, 0.95), transparent 100%)",
          padding: "54px 64px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#ffffff",
          boxSizing: "border-box",
        }}
      >
        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Logo & Tagline */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                backgroundColor: "#1f52c4",
                boxShadow: "0 8px 24px rgba(31, 82, 196, 0.5)",
                color: "#ffffff",
                fontSize: "28px",
                fontWeight: 900,
              }}
            >
              V
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                  lineHeight: 1,
                }}
              >
                ValGo
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#93c5fd",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                Campus Food &amp; Essentials
              </span>
            </div>
          </div>

          {/* Campus Pilot Pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              borderRadius: "9999px",
              padding: "10px 22px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "9999px",
                backgroundColor: "#34d399",
                boxShadow: "0 0 12px #34d399",
              }}
            />
            <span
              style={{
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "0.1em",
                color: "#ffffff",
                textTransform: "uppercase",
              }}
            >
              OOU Ago Iwoye Campus Pilot
            </span>
          </div>
        </div>

        {/* Center Main Headline & Description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            maxWidth: "1060px",
            marginTop: "16px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            Your Favorite Campus Meals,
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#fbbf24",
            }}
          >
            Delivered In 15 Minutes.
          </div>
          <div
            style={{
              fontSize: "21px",
              fontWeight: 500,
              lineHeight: 1.4,
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: "920px",
              marginTop: "6px",
            }}
          >
            Skip the cafeteria queues. Order hot smoky party jollof, smash
            cheeseburgers, peppered wings &amp; hostel essentials straight to your door with
            zero hidden fees.
          </div>
        </div>

        {/* Bottom Feature Badges & URL Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.14)",
            paddingTop: "24px",
          }}
        >
          {/* Key Metric Highlights */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                borderRadius: "10px",
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              15 to 20 Min Delivery
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                borderRadius: "10px",
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              40+ Food Spots
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                borderRadius: "10px",
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              NGN 0 Hidden Fees
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                borderRadius: "10px",
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              Live GPS Tracking
            </div>
          </div>

          {/* Domain Pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#ffffff",
              color: "#081226",
              borderRadius: "10px",
              padding: "8px 20px",
              fontSize: "15px",
              fontWeight: 800,
              letterSpacing: "-0.01em",
            }}
          >
            usevalgo.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
