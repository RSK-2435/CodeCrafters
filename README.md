**Self-Service Identity Lifecycle Automation (MVP)**

**Overview**
The project proposes the development of a Self-Service Identity Lifecycle Automation System that facilitates the automation of employee access management in the context of the Joiner-Mover-Leaver model. The proposed solution replaces the current manual and ticket-based process with an automated and policy-based workflow.

**Problem Statement**
Organizations face several challenges in managing user identities:
Manual onboarding and offboarding processes
Delayed access provisioning
Excess or outdated access permissions
Orphaned accounts leading to security risks
Lack of centralized audit and governance

**Proposed Solution**
The system has the following functionality:
The self-service portal has automated workflows for the following:
Creating user accounts during onboarding
Modifying access rights during role changes
Revoking access during offboarding
Implementing approval-based governance
Maintaining audit logs for compliance

**Key Features**
Joiner Automation: Automatically provisions user access based on assigned roles

Mover Management: Dynamically updates permissions when roles change

Leaver Handling: Securely revokes all access and removes user accounts

Approval Workflow: Ensures all actions are reviewed and approved before execution

Role-Based Access Control (RBAC): Assigns permissions based on predefined roles

Audit Logging: Tracks all actions for transparency and compliance

**System Architecture**
1.User Interface (Portal / Chatbot)
2.Backend API (Workflow Engine)
3.Mock IAM Layer (Simulated Access Management)
4.Database (Users, Roles, Access Data)

**Workflow**
1.User submits request (onboarding / role change / offboarding)
2Request enters approval queue
3.Manager reviews and approves/rejects
4.System executes action via simulated IAM logic
5.Changes are reflected in the dashboard
6.All actions are logged for audit purposes

**How to Run the Project**
**1. Clone the Repository**
git clone <repository-link>
cd project-folder

**2. Install Dependencies**
Frontend
cd frontend
npm install
npm start
Backend
cd backend
npm install
node index.js

**Demo Flow**
Add a new employee (Joiner)
View pending approval request
Approve the request
Observe automatic access assignment
Modify user role (Mover)
Verify updated permissions
Remove user (Leaver)
Confirm access revocation

**Impact**
Reduces manual effort in identity management
Improves security through controlled access
Eliminates orphaned accounts
Enhances compliance and audit readiness
Accelerates onboarding and role transitions

**Future Enhancements**
AI-based role recommendation
Identity risk scoring
Integration with real IAM systems
Advanced analytics dashboard
Adaptive access control

**Team Members**
Rutuja Kulkarni
Maya Pardeshi
Sakshi Lohar
