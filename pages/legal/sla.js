import Head from 'next/head';

const ServiceLevelAgreement = props => (
    <div>
        <Head>
            <title>
            Feature Flag Platform Service Level Agreement - Flagsmith
            </title>
            <link rel="canonical" href="https://flagsmith.com/legal/sla/" />
        </Head>
        <div className="legal-container">
            <div className="container">
                <h1>Service Level Agreement</h1>
<ol>
<li><strong>Introduction</strong></li>
</ol>
<p>This Service Level Agreement (“<strong>SLA</strong>”) applies to the use of the Flagsmith Service under the provisions of the Flagsmith Terms of Service (the “<strong>Terms</strong>”).</p>
<p>Unless provided otherwise, capitalised terms used in this SLA have the meaning given in the Terms.</p>
<ol>
<li><strong>Definitions</strong></li>
</ol>
<p>“<strong>Maintenance</strong>” means scheduled Unavailability of Flagsmith Services due to required maintenance, as announced by Flagsmith prior to the Services becoming Unavailable.</p>
<p>“<strong>Monthly Uptime Percentage</strong>” is calculated by subtracting from 100% the percentage of minutes during the month in which Flagsmith Services were Unavailable, excluding Maintenance time.</p>
<p>“<strong>Service Credit</strong>” means a credit, calculated as set forth below, that Flagsmith may credit back to an eligible account.</p>
<p>“<strong>SLA Exclusions</strong>” mean the exclusions set out in paragraph 7 below.</p>
<p>“<strong>Unavailable</strong>” and “<strong>Unavailability</strong>” mean instances where the Service is not running or not reachable due to reasons within Flagsmith’s reasonable control, including Maintenance but excluding the SLA Exclusions.</p>
<ol>
<li><strong>Service Commitment</strong> </li>
</ol>
<p>Flagsmith will use commercially reasonable efforts to ensure the Services are running with a Monthly Uptime Percentage of at least 99.95% during any calendar month (the “<strong>Service Commitment</strong>”).</p>
<p>Subject to the SLA Exclusions, if we do not meet the Service Commitment, you will be eligible to receive a Service Credit.</p>
<ol>
<li><strong>Service Credits</strong></li>
</ol>
<p>Service Credits are calculated as a percentage of the total Fees paid for the monthly billing cycle in which the Unavailability occurred (the “<strong>Relevant Fees</strong>”), in accordance with the schedule below:</p>
<ol>
<li>For Monthly Uptime Percentage less than 99.95% but equal to or greater than 99.0%, you will be eligible for a Service Credit of 10% of the Relevant Fees; and</li>
<li>For Monthly Uptime Percentage less than 99.0%, you will be eligible for a Service Credit of 30% of the Relevant Fees.</li>
</ol>
<p>We will apply any Service Credits only against future payments for the Services otherwise due from you. At our discretion, we may issue the Service Credit to the credit card you used to pay for the billing cycle in which the Unavailability occurred. Service Credits will not entitle you to any refund or other payment from Flagsmith. </p>
<p>A Service Credit will be applicable and issued only if the credit amount for the applicable monthly billing cycle is greater than one pound (GBP £1). Service Credits may not be transferred or applied to any other account.</p>
<ol>
<li><strong>Sole Remedy</strong></li>
</ol>
<p>To the extent permitted by law, your sole and exclusive remedy for any Unavailability of the Service is the receipt of Service Credits in accordance with this SLA.</p>
<ol>
<li><strong>Service Credit Request and Payment Procedures</strong></li>
</ol>
<p>To receive a Service Credit, you must submit a <strong>Service Credit Request</strong> by emailing <a href="mailto:support@flagsmith.com">support@flagsmith.com</a>. </p>
<p>To be eligible, the Service Credit Request must be received within 30 days of the incident occurring and must include:</p>
<ul>
<li>the words “Flagsmith SLA Service Credit Request” in the subject line;</li>
<li>the dates and times of each Unavailability incident that you are claiming;</li>
<li>the account handle(s); and</li>
<li>logs that document the errors and corroborate your claimed outage (any confidential or sensitive information in these logs should be removed or replaced with asterisks).</li>
</ul>
<p>If the relevant Monthly Uptime Percentage of such request confirmed by us and is less than the Service Commitment, then we will issue the Service Credit to you within one calendar month following the month in which your Service Credit Request is confirmed by us. Your failure to provide the Service Credit Request in accordance with the information required above may disqualify you from receiving a Service Credit.</p>
<ol>
<li><strong>SLA Exclusions</strong></li>
</ol>
<p>The Service Commitment does not apply to any Unavailability:</p>
<ol>
<li>resulting from a suspension, withdrawal or termination of your access to the Service, permitted under the Terms;</li>
<li>caused by factors outside our reasonable control, including any force majeure event, failure of internet access, or problems beyond the Flagsmith network;</li>
<li>resulting from any actions or inactions of you or any Team Members; or</li>
<li>resulting from the equipment, software or other technology used by you or a Team Member or any third party (other than third party equipment within our direct control).</li>
</ol>
<p>If availability of the Service is impacted by factors other than those used in our Monthly Uptime Percentage calculation, then we may issue a Service Credit considering such factors at our discretion.</p>

            </div>
        </div>
    </div>
);

ServiceLevelAgreement.displayName = 'ServiceLevelAgreement';
export default ServiceLevelAgreement;
