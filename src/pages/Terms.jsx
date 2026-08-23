import PageHero from "../components/PageHero";

export default function Terms() {
  return (
    <div>
      <PageHero title="Terms & Conditions" />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-600 leading-relaxed space-y-4">
        {/* TODO: replace with finalized terms — template-based placeholder for now */}
        <p>
          By using this website and submitting an inquiry, you agree to be contacted by
          MD Tech Advisor regarding the services described on this site.
        </p>
        <p>
          MD Tech Advisor is an independent healthcare operations support organization.
          We provide operational and administrative support services and are not an
          insurer or an IRDAI registered TPA.
        </p>
        <p>
          This is placeholder content — final terms should be reviewed and approved by
          MD Tech Advisor, ideally with legal input, before launch.
        </p>
      </section>
    </div>
  );
}
