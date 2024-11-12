# Time-Out Capture LWC for Technician Resource Absence

## Overview

The Time-Out Capture LWC (Lightning Web Component) allows the capture of resource absences for technicians across different Salesforce objects. This component integrates seamlessly with Salesforce's service management system, ensuring that technician absence data is tracked and stored efficiently on every relevant object (e.g., Work Orders, Service Appointments, Technician Schedules).
This solution ensures that field technicians' absence data is easily accessible and up-to-date, helping manage service schedules and resource allocation effectively.

## Features

- Track Technician Absences: Capture time-off or absence details for technicians directly from Salesforce.
- Customizable Fields: The component supports custom fields and configurations to suit specific business needs.
- Integration with Multiple Objects: Works with any object that requires resource absence tracking, such as Work Orders, Service Appointments, or custom technician scheduling objects.
- Efficient Data Handling: Automates the process of logging and associating technician absences with relevant service tasks.
- User-Friendly Interface: Provides an intuitive interface for users to capture absence details, including dates, times, and reasons.
  
## Usage

Once the Time-Out Capture LWC is added to a page layout, follow these steps to use it:

- Navigate to the record page of the technician (e.g., Work Order or Service Appointment).

![image](https://github.com/user-attachments/assets/541dabf9-2980-4b8e-9b5a-c8754a170ff2)

- Click on the Capture Absence button or input fields where the component is placed.

![image](https://github.com/user-attachments/assets/c528c0fd-0db2-4155-be3d-0c08087a0ce8)

- Enter the required absence details such as:
     1. Absence Date Range
     2. Absence Type/Reason

  ![image](https://github.com/user-attachments/assets/8358ea81-6b34-474b-91ad-22f600883b14)

- Save the record. The absence details will be captured and stored in the relevant fields for that object.
- The captured data will be accessible for reporting and scheduling adjustments.

