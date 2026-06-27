import { Check, LoaderCircle } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { AppLink } from "../lib/navigation";
import { routes } from "../lib/routes";
import { Container, Eyebrow, Reveal } from "./primitives";

const GOOGLE_FORM_RESPONSE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfyHMvYaU-_RH-kf0zTI9Pk4LDjcIJv8SMip0OsAk0LNXcATw/formResponse";

const GOOGLE_FORM_FBXZ = "-6793421169420885386";

const industries = [
  "Advertising & Marketing",
  "Agriculture & Farming",
  "Automotive",
  "Banking & Financial Services",
  "Construction",
  "Consulting",
  "Consumer Goods",
  "Education & Training",
  "Energy & Utilities",
  "Engineering",
  "Entertainment & Media",
  "Event Management",
  "Fashion & Apparel",
  "Food & Beverage",
  "Government & Public Sector",
  "Healthcare & Medical Services",
  "Hospitality & Tourism",
  "Human Resources & Recruitment",
  "Information Technology (IT)",
  "Insurance",
  "Legal Services",
  "Logistics & Supply Chain",
  "Manufacturing",
  "Mining & Natural Resources",
  "Nonprofit & NGOs",
  "Real Estate",
  "Retail & E-commerce",
  "SaaS (Software as a Service)",
  "Telecommunications",
  "Transportation",
  "Wholesale & Distribution",
  "Professional Services",
  "Security Services",
  "Sports & Fitness",
  "Travel & Tourism",
  "Beauty & Cosmetics",
  "Home Services",
  "Research & Development",
  "Pharmaceuticals & Biotechnology",
  "Other",
] as const;

const businessObjectives = [
  "Generate more leads",
  "Improve lead tracking and management",
  "Increase sales conversions",
  "Streamline the sales process",
  "Improve customer relationship management",
  "Enhance customer support and service",
  "Centralize customer data",
  "Automate repetitive tasks and workflows",
  "Improve team collaboration",
  "Track sales performance and KPIs",
  "Manage marketing campaigns",
  "Improve customer retention",
  "Reduce manual data entry",
  "Gain better business insights through reporting",
  "Scale operations and support business growth",
  "Manage projects and client communications",
  "Improve follow-up and engagement with prospects",
  "Integrate business tools into one platform",
  "Standardize business processes",
  "Other",
] as const;

const customerManagementOptions = [
  "Spreadsheets (Excel, Google Sheets)",
  "Paper records/manual tracking",
  "Email inboxes",
  "Phone calls and notes",
  "WhatsApp or messaging apps",
  "Existing CRM system",
  "Sales management software",
  "Marketing automation platform",
  "Customer support/helpdesk software",
  "ERP system",
  "Custom-built internal system",
  "Multiple disconnected tools",
  "We currently do not have a formal process",
  "Other",
] as const;

const leadSourceOptions = [
  "Website forms",
  "Referrals",
  "Paid ads",
  "Phone calls",
  "Events",
  "Social media",
  "Walk-ins",
  "Email campaigns",
  "Other",
] as const;

const supportChannelOptions = [
  "Email",
  "Phone",
  "Live chat",
  "WhatsApp",
  "Social media",
  "Helpdesk/ticketing system",
  "In-person",
  "Other",
] as const;

type DemoFormData = {
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  regions: string;
  objective: string;
  currentManagement: string;
  leadSources: string;
  supportChannels: string;
  extraContext: string;
  demoDate: string;
};

const initialFormData: DemoFormData = {
  companyName: "",
  email: "",
  phone: "",
  industry: "",
  regions: "",
  objective: "",
  currentManagement: "",
  leadSources: "",
  supportChannels: "",
  extraContext: "",
  demoDate: "",
};

type FormStatus = "idle" | "submitting" | "submitted";

function splitDate(dateValue: string) {
  const [year = "", month = "", day = ""] = dateValue.split("-");
  return { day, month, year };
}

function RequiredMark() {
  return <span className="text-brand" aria-hidden="true">*</span>;
}

function FieldLabel({
  children,
  htmlFor,
  required = false,
}: {
  children: ReactNode;
  htmlFor: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-ui text-[13px] font-semibold uppercase tracking-[0.14em] text-ink"
    >
      {children} {required ? <RequiredMark /> : null}
    </label>
  );
}

const inputClass =
  "mt-3 min-h-12 w-full rounded-[3px] border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-3/70 focus:border-brand focus:ring-2 focus:ring-brand/15 disabled:bg-bg-soft";

export default function DemoRequestForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const hiddenFormRef = useRef<HTMLFormElement | null>(null);
  const successPanelRef = useRef<HTMLDivElement | null>(null);
  const hasPostedRef = useRef(false);
  const demoDate = splitDate(formData.demoDate);

  const isSubmitting = status === "submitting";

  useEffect(() => {
    if (status !== "submitted") {
      return;
    }

    successPanelRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [status]);

  const updateField =
    (field: keyof DemoFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({ ...current, [field]: event.target.value }));
      setError("");
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requiredFields: Array<[keyof DemoFormData, string]> = [
      ["companyName", "Add your company name."],
      ["email", "Add your company email."],
      ["phone", "Add a phone number."],
      ["industry", "Choose your industry."],
      ["regions", "Add the regions or countries your business serves."],
      ["leadSources", "Choose how leads enter your business."],
      ["supportChannels", "Choose the support channel your team uses."],
      ["demoDate", "Choose an available demo date."],
    ];

    const missingField = requiredFields.find(([field]) => !formData[field].trim());

    if (missingField) {
      setError(missingField[1]);
      return;
    }

    hasPostedRef.current = true;
    setStatus("submitting");

    requestAnimationFrame(() => {
      hiddenFormRef.current?.submit();
    });
  };

  const handleSubmissionFrameLoad = () => {
    if (!hasPostedRef.current) {
      return;
    }

    hasPostedRef.current = false;
    setStatus("submitted");
    setError("");
  };

  const resetForm = () => {
    hasPostedRef.current = false;
    setFormData(initialFormData);
    setStatus("idle");
    setError("");
  };

  return (
    <section id="demo-form" className="bg-white py-24 md:py-32">
      <iframe
        name="xyra-google-form-frame"
        title="Google Form submission frame"
        className="hidden"
        onLoad={handleSubmissionFrameLoad}
      />

      <form
        ref={hiddenFormRef}
        action={GOOGLE_FORM_RESPONSE_URL}
        method="POST"
        target="xyra-google-form-frame"
        className="hidden"
      >
        <input type="hidden" name="entry.646577554" value={formData.companyName} readOnly />
        <input type="hidden" name="emailAddress" value={formData.email} readOnly />
        <input type="hidden" name="entry.1368157833" value={formData.phone} readOnly />
        <input type="hidden" name="entry.2145503704_sentinel" value="" readOnly />
        <input type="hidden" name="entry.2145503704" value={formData.industry} readOnly />
        <input type="hidden" name="entry.1389015437" value={formData.regions} readOnly />
        <input type="hidden" name="entry.287852778_sentinel" value="" readOnly />
        <input
          type="hidden"
          name="entry.287852778"
          value={formData.objective === "Other" ? "__other_option__" : formData.objective}
          readOnly
        />
        {formData.objective === "Other" ? (
          <input
            type="hidden"
            name="entry.287852778.other_option_response"
            value="Other"
            readOnly
          />
        ) : null}
        <input type="hidden" name="entry.1576132630_sentinel" value="" readOnly />
        <input
          type="hidden"
          name="entry.1576132630"
          value={
            formData.currentManagement === "Other"
              ? "__other_option__"
              : formData.currentManagement
          }
          readOnly
        />
        {formData.currentManagement === "Other" ? (
          <input
            type="hidden"
            name="entry.1576132630.other_option_response"
            value="Other"
            readOnly
          />
        ) : null}
        <input type="hidden" name="entry.407609910" value={formData.leadSources} readOnly />
        <input type="hidden" name="entry.19757999" value={formData.supportChannels} readOnly />
        <input type="hidden" name="entry.49531902" value={formData.extraContext} readOnly />
        <input type="hidden" name="entry.322247460_day" value={demoDate.day} readOnly />
        <input type="hidden" name="entry.322247460_month" value={demoDate.month} readOnly />
        <input type="hidden" name="entry.322247460_year" value={demoDate.year} readOnly />
        <input type="hidden" name="fvv" value="1" readOnly />
        <input type="hidden" name="partialResponse" value={`[null,null,"${GOOGLE_FORM_FBXZ}"]`} readOnly />
        <input type="hidden" name="pageHistory" value="0" readOnly />
        <input type="hidden" name="fbzx" value={GOOGLE_FORM_FBXZ} readOnly />
        <input type="hidden" name="submissionTimestamp" value="-1" readOnly />
      </form>

      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-14">
          <Reveal>
            <Eyebrow>Demo request</Eyebrow>
            <h2 className="mt-7 text-[2.35rem] font-semibold leading-[1.08] text-ink sm:text-[3rem]">
              Let us get to know your business first.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-3">
              Help us understand your business, team, and processes so we can
              configure the CRM conversation around your workflow and goals.
            </p>
            <div className="mt-10 border border-line bg-bg-soft p-6">
              <div className="font-ui text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                Before the walkthrough
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                The details you share here go directly into the demo intake form
                so the team can prepare before reaching out.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            {status === "submitted" ? (
              <div
                ref={successPanelRef}
                className="border border-line bg-white p-8 shadow-sm sm:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success text-white">
                  <Check size={22} />
                </div>
                <h3 className="mt-7 text-[2rem] font-semibold text-ink">
                  Demo request sent.
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-3">
                  Your details have been submitted. We will review the request
                  and follow up with the next step.
                </p>
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="font-ui inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] bg-ink px-7 py-3.5 text-[14px] font-medium tracking-wide text-white transition-colors hover:bg-brand"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-line bg-white p-6 shadow-sm sm:p-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <FieldLabel htmlFor="companyName" required>
                      Company name
                    </FieldLabel>
                    <input
                      id="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={updateField("companyName")}
                      disabled={isSubmitting}
                      className={inputClass}
                      autoComplete="organization"
                      placeholder="Acme Limited"
                    />
                  </div>

                  <div>
                    <FieldLabel htmlFor="email" required>
                      Company email
                    </FieldLabel>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={updateField("email")}
                      disabled={isSubmitting}
                      className={inputClass}
                      autoComplete="email"
                      placeholder="name@company.com"
                    />
                  </div>

                  <div>
                    <FieldLabel htmlFor="phone" required>
                      Phone number
                    </FieldLabel>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={updateField("phone")}
                      disabled={isSubmitting}
                      className={inputClass}
                      autoComplete="tel"
                      placeholder="+234 800 000 0000"
                    />
                  </div>

                  <div>
                    <FieldLabel htmlFor="industry" required>
                      Industry
                    </FieldLabel>
                    <select
                      id="industry"
                      value={formData.industry}
                      onChange={updateField("industry")}
                      disabled={isSubmitting}
                      className={inputClass}
                    >
                      <option value="">Choose your industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <FieldLabel htmlFor="demoDate" required>
                      Available demo date
                    </FieldLabel>
                    <input
                      id="demoDate"
                      type="date"
                      value={formData.demoDate}
                      onChange={updateField("demoDate")}
                      disabled={isSubmitting}
                      className={inputClass}
                      placeholder="Select a demo date"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <FieldLabel htmlFor="regions" required>
                      Where does your business operate?
                    </FieldLabel>
                    <input
                      id="regions"
                      type="text"
                      value={formData.regions}
                      onChange={updateField("regions")}
                      disabled={isSubmitting}
                      className={inputClass}
                      placeholder="Nigeria, Ghana, United Kingdom"
                    />
                  </div>

                  <div>
                    <FieldLabel htmlFor="objective">
                      Primary CRM objective
                    </FieldLabel>
                    <select
                      id="objective"
                      value={formData.objective}
                      onChange={updateField("objective")}
                      disabled={isSubmitting}
                      className={inputClass}
                    >
                      <option value="">Choose your primary objective</option>
                      {businessObjectives.map((objective) => (
                        <option key={objective} value={objective}>
                          {objective}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <FieldLabel htmlFor="currentManagement">
                      Current lead management
                    </FieldLabel>
                    <select
                      id="currentManagement"
                      value={formData.currentManagement}
                      onChange={updateField("currentManagement")}
                      disabled={isSubmitting}
                      className={inputClass}
                    >
                      <option value="">Choose your current process</option>
                      {customerManagementOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <FieldLabel htmlFor="leadSources" required>
                      How do leads enter your business?
                    </FieldLabel>
                    <select
                      id="leadSources"
                      value={formData.leadSources}
                      onChange={updateField("leadSources")}
                      disabled={isSubmitting}
                      className={inputClass}
                    >
                      <option value="">Choose how leads enter</option>
                      {leadSourceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <FieldLabel htmlFor="supportChannels" required>
                      What support channels do you use?
                    </FieldLabel>
                    <select
                      id="supportChannels"
                      value={formData.supportChannels}
                      onChange={updateField("supportChannels")}
                      disabled={isSubmitting}
                      className={inputClass}
                    >
                      <option value="">Choose a support channel</option>
                      {supportChannelOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <FieldLabel htmlFor="extraContext">
                      Anything else before setup begins?
                    </FieldLabel>
                    <textarea
                      id="extraContext"
                      value={formData.extraContext}
                      onChange={updateField("extraContext")}
                      disabled={isSubmitting}
                      className={`${inputClass} min-h-24 resize-y`}
                      placeholder="Share any tools, workflows, or CRM requirements we should know about."
                    />
                  </div>
                </div>

                {error ? (
                  <div className="mt-6 border border-warning/35 bg-warning/10 px-4 py-3 text-[14px] font-medium text-ink">
                    {error}
                  </div>
                ) : null}

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="font-ui inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] bg-ink px-7 py-3.5 text-[14px] font-medium tracking-wide text-white transition-colors hover:bg-brand disabled:cursor-not-allowed disabled:bg-ink-3"
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderCircle size={18} className="animate-spin" />
                        Sending request
                      </>
                    ) : (
                      "Send demo request"
                    )}
                  </button>
                  <p className="text-[13px] leading-relaxed text-ink-3">
                    Required fields are marked with an asterisk. By submitting,
                    you agree that Xyra may process the request as described in
                    the{" "}
                    <AppLink
                      href={routes.privacy}
                      className="font-semibold text-ink underline underline-offset-4 hover:text-brand"
                    >
                      Privacy Policy
                    </AppLink>
                    .
                  </p>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
