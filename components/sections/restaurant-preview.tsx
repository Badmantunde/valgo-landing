import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeUp } from "@/components/ui/motion";
import { GooglePlayIcon } from "@/components/ui/app-store-badges";

export function RestaurantPreview() {
  return (
    <section className="py-20 sm:py-24 bg-[#fafbfc] border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="In the app"
          title="Mama T's Kitchen, exactly as you'll order it"
          description={`The same menu, pricing, and checkout flow students will use on day one, starting at our OOU launch.`}
        />

        <FadeUp className="mt-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* App screenshot */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-[300px] rounded-lg overflow-hidden border border-border bg-white shadow-float">
                <Image
                  src="/app-screens/restaurant-menu.png"
                  alt="Mama T's Kitchen menu on ValGo"
                  width={390}
                  height={844}
                  className="w-full h-auto block"
                  sizes="(max-width: 768px) 260px, 300px"
                />
              </div>
            </div>

            {/* Feature list */}
            <div className="space-y-6">
              {[
                {
                  title: "Real local pricing",
                  detail: "Smoky jollof from ₦200, moimoi at ₦300. The same prices you'd pay walking to Ita-Merin.",
                },
                {
                  title: "Build your plate",
                  detail: "Add jollof, grilled turkey, dodo, and a Coke. Quantity controls on every item.",
                },
                {
                  title: "Cart to checkout",
                  detail: "Subtotal, delivery fee, and service fee shown upfront. No surprises at checkout.",
                },
                {
                  title: "Delivery to hostel",
                  detail: "Track your rider from Mama T's Kitchen to Oloko Hall, Konigba, or anywhere on campus.",
                },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted mt-1 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex gap-3">
                  <div className="w-full max-w-[110px] rounded-lg overflow-hidden border border-border shadow-sm">
                    <Image
                      src="/app-screens/cart.png"
                      alt="ValGo cart"
                      width={120}
                      height={216}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-full max-w-[110px] rounded-lg overflow-hidden border border-border shadow-sm">
                    <Image
                      src="/app-screens/order-details.png"
                      alt="ValGo order tracking"
                      width={120}
                      height={216}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href="https://usevalgo.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
                  >
                    Order from Campus Spots &rarr;
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.valgo.customer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-blue-600 font-medium"
                  >
                    <GooglePlayIcon className="h-3.5 w-3.5" />
                    <span>Or get the Android App on Google Play</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
