export default function MentorBelajarkuDetail() {
  return (
    <>
      <h4>🎓 Core Architecture & Technical Highlights</h4>
      <ul>
        <li>
          <strong>📸 In-Browser Photo Attendance & Smart Compression:</strong> Built-in camera capture directly inside the browser using <code>react-webcam</code> and client-side compression (<code>browser-image-compression</code>) to conserve mobile bandwidth. Captures are uploaded to structured <strong>Supabase Storage</strong> buckets (<code>attendance/&#123;year&#125;/&#123;month&#125;/&#123;session&#125;/&#123;student&#125;.jpg</code>) supporting 5 distinct attendance states (Present, Absent, Permission, Sick, Late).
        </li>
        <li>
          <strong>📅 Decoupled Routine Schedule vs. Actual Calendar Session:</strong> Clean architectural boundary between weekly recurrence templates (<em>Schedule</em>) and real calendar execution (<em>Session</em>). Seamlessly accommodates substitute tutors (badal) and student permission rescheduling without polluting master class routines.
        </li>
        <li>
          <strong>💵 Automated Payroll Engine & Historical Effective Dating:</strong> Zero-error server-side compensation calculation (<code>fee = rate × payable_students</code>) enforced with historical rate immutability—guaranteeing future tuition/wage adjustments never corrupt historical payroll archives. Includes a multi-tier review lifecycle (<em>Draft &rarr; Review &rarr; Finalized &rarr; Paid</em>).
        </li>
        <li>
          <strong>🔐 Enterprise RBAC & Tamper-Proof Audit Logging:</strong> Role-separated workflows for Management (Owner, HRD, Keuangan) and Tutors backed by <strong>Better Auth</strong> and Next.js middleware protection. Comprehensive audit trails log every sensitive modification (attendance overrides, rate adjustments, status transitions) with full <em>who, what, when, before, after</em> metadata.
        </li>
        <li>
          <strong>📊 Analytics & Fast Modern UX:</strong> Operational metrics and interactive charts built with <strong>Recharts</strong> and <strong>TanStack Table v9</strong>. Features zero-delay database fallback with synthetic demo data for rapid onboarding, route prefetching, and optimistic pending state indicators via <strong>Zustand</strong>.
        </li>
      </ul>
    </>
  );
}

