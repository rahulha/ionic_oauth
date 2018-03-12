import { OAuth } from '../Process/OAuth'
import { DeepLinkMatch } from '../../Deeplink/Deeplink';

import { Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SafariViewController } from '@ionic-native/safari-view-controller';
import { Deeplinks } from '@ionic-native/deeplinks';

export module GoogleScopes {

    export class Calendar_API_v3 {
        public static calendar: Google.Scope = {
            Key: "calendar", URL: "https://www.googleapis.com/auth/calendar", Description: "Manage your calendars"
        }
        public static calendar_readonly: Google.Scope = {
            Key: "calendar.readonly", URL: "https://www.googleapis.com/auth/calendar.readonly", Description: "View your calendars"
        }
    }

    export class Google_Sign_In {

        public static profile: Google.Scope = {
            Key: "profile", Description: "View your basic profile info", URL: ""
        }
        public static email: Google.Scope = {
            Key: "email", Description: "View your email address", URL: ""
        }
        public static openid: Google.Scope = {
            Key: "openid", Description: "Authenticate using OpenID Connect", URL: ""
        }
    }

    export class OpenID_Connect {

        public static openid: Google.Scope = {
            Key: "openid", Description: "Authenticate using OpenID Connect", URL: ""
        }
        public static profile: Google.Scope = {
            Key: "profile", Description: "View your basic profile info", URL: ""
        }
        public static email: Google.Scope = {
            Key: "email", Description: "View your email address", URL: ""
        }
    }

    export class Google_People_API_v1 {
        public static contacts: Google.Scope = { Key: "contacts", Description: "Manage your contacts", URL: "https://www.googleapis.com/auth/contacts" }
        public static contacts_readonly: Google.Scope = { Key: "contacts.readonly", URL: "https://www.googleapis.com/auth/contacts.readonly", Description: "View your contacts" }
        public static plus_login: Google.Scope = { Key: "plus.login", Description: "Know the list of people in your circles, your age range, and language", URL: "https://www.googleapis.com/auth/plus.login" }
        public static user_addresses_read: Google.Scope = { Key: "user.addresses.read", Description: "View your street addresses", URL: "https://www.googleapis.com/auth/user.addresses.read" }
        public static user_birthday_read: Google.Scope = { Key: "user.birthday.read", Description: "View your complete date of birth", URL: "https://www.googleapis.com/auth/user.birthday.read" }
        public static user_emails_read: Google.Scope = { Key: "user.emails.read", Description: "View your email addresses", URL: "https://www.googleapis.com/auth/user.emails.read" }
        public static user_phonenumbers_read: Google.Scope = { Key: "user.phonenumbers.read", Description: "View your phone numbers", URL: "https://www.googleapis.com/auth/user.phonenumbers.read" }
        public static userinfo_email: Google.Scope = { Key: "userinfo.email", Description: "View your email address", URL: "https://www.googleapis.com/auth/userinfo.email" }
        public static userinfo_profile: Google.Scope = { Key: "userinfo.profile", Description: "View your basic profile info", URL: "https://www.googleapis.com/auth/userinfo.profile" }
    }

    //export class Ad_Exchange_Buyer_API_v1_4 {
    //    public adexchange_buyer: Google.Scope = { Key: "adexchange.buyer", Description: "Manage your Ad Exchange buyer account configuration", URL: "https://www.googleapis.com/auth/adexchange.buyer" };
    //}

    //export class Ad_Exchange_Buyer_API_II_v2beta1
    //{
    //    public adexchange_buyer: Google.Scope = {
    //        Key: "adexchange.buyer", URL: "https://www.googleapis.com/auth/adexchange.buyer", Description: "Manage your Ad Exchange buyer account configuration"
    //    }
    //}

    //export class Ad_Exchange_Seller_API_v2_0
    //{
    //    public adexchange_seller: Google.Scope = {
    //        Key: "adexchange.seller", URL: "https://www.googleapis.com/auth/adexchange.seller", Description: "View and manage your Ad Exchange data"
    //    };
    //    public adexchange_seller_readonly: Google.Scope = {
    //        key: "adexchange.seller.readonly", URL: "https://www.googleapis.com/auth/adexchange.seller.readonly", Description: "View your Ad Exchange data"
    //    }
    //}
    //export class Google Ad Experience Report API, v1
    //{
    //    https://www.googleapis.com/auth/xapi.zoo	Test scope for access to the Zoo service
    //}
    //export class Admin Data Transfer API, datatransfer_v1
    //{

    //    https://www.googleapis.com/auth/admin.datatransfer	View and manage data transfers between users in your organization
    //    https://www.googleapis.com/auth/admin.datatransfer.readonly	View data transfers between users in your organization
    //}
    //export class Admin Directory API, directory_v1
    //{

    //    https://www.googleapis.com/auth/admin.directory.customer	View and manage customer related information
    //    https://www.googleapis.com/auth/admin.directory.customer.readonly	View customer related information
    //    https://www.googleapis.com/auth/admin.directory.device.chromeos	View and manage your Chrome OS devices' metadata
    //    https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly	View your Chrome OS devices' metadata
    //    https://www.googleapis.com/auth/admin.directory.device.mobile	View and manage your mobile devices' metadata
    //    https://www.googleapis.com/auth/admin.directory.device.mobile.action	Manage your mobile devices by performing administrative tasks
    //    https://www.googleapis.com/auth/admin.directory.device.mobile.readonly	View your mobile devices' metadata
    //    https://www.googleapis.com/auth/admin.directory.domain	View and manage the provisioning of domains for your customers
    //    https://www.googleapis.com/auth/admin.directory.domain.readonly	View domains related to your customers
    //    https://www.googleapis.com/auth/admin.directory.group	View and manage the provisioning of groups on your domain
    //    https://www.googleapis.com/auth/admin.directory.group.member	View and manage group subscriptions on your domain
    //    https://www.googleapis.com/auth/admin.directory.group.member.readonly	View group subscriptions on your domain
    //    https://www.googleapis.com/auth/admin.directory.group.readonly	View groups on your domain
    //    https://www.googleapis.com/auth/admin.directory.notifications	View and manage notifications received on your domain
    //    https://www.googleapis.com/auth/admin.directory.orgunit	View and manage organization units on your domain
    //    https://www.googleapis.com/auth/admin.directory.orgunit.readonly	View organization units on your domain
    //    https://www.googleapis.com/auth/admin.directory.resource.calendar	View and manage the provisioning of calendar resources on your domain
    //    https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly	View calendar resources on your domain
    //    https://www.googleapis.com/auth/admin.directory.rolemanagement	Manage delegated admin roles for your domain
    //    https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly	View delegated admin roles for your domain
    //    https://www.googleapis.com/auth/admin.directory.user	View and manage the provisioning of users on your domain
    //    https://www.googleapis.com/auth/admin.directory.user.alias	View and manage user aliases on your domain
    //    https://www.googleapis.com/auth/admin.directory.user.alias.readonly	View user aliases on your domain
    //    https://www.googleapis.com/auth/admin.directory.user.readonly	View users on your domain
    //    https://www.googleapis.com/auth/admin.directory.user.security	Manage data access permissions for users on your domain
    //    https://www.googleapis.com/auth/admin.directory.userschema	View and manage the provisioning of user schemas on your domain
    //    https://www.googleapis.com/auth/admin.directory.userschema.readonly	View user schemas on your domain
    //}
    //export class Admin Reports API, reports_v1
    //{

    //    https://www.googleapis.com/auth/admin.reports.audit.readonly	View audit reports for your G Suite domain
    //    https://www.googleapis.com/auth/admin.reports.usage.readonly	View usage reports for your G Suite domain
    //}
    //export class AdSense Management API, v1.4
    //{

    //    https://www.googleapis.com/auth/adsense	View and manage your AdSense data
    //    https://www.googleapis.com/auth/adsense.readonly	View your AdSense data
    //}
    //export class AdSense Host API, v4.1
    //{

    //    https://www.googleapis.com/auth/adsensehost	View and manage your AdSense host data and associated accounts
    //}
    //export class Google Analytics API, v3
    //{

    //    https://www.googleapis.com/auth/analytics	View and manage your Google Analytics data
    //    https://www.googleapis.com/auth/analytics.edit	Edit Google Analytics management entities
    //    https://www.googleapis.com/auth/analytics.manage.users	Manage Google Analytics Account users by email address
    //    https://www.googleapis.com/auth/analytics.manage.users.readonly	View Google Analytics user permissions
    //    https://www.googleapis.com/auth/analytics.provision	Create a new Google Analytics account along with its default property and view
    //    https://www.googleapis.com/auth/analytics.readonly	View your Google Analytics data
    //}
    //export class Google Analytics Reporting API, v4
    //{

    //    https://www.googleapis.com/auth/analytics	View and manage your Google Analytics data
    //    https://www.googleapis.com/auth/analytics.readonly	View your Google Analytics data
    //}
    //export class Google Play EMM API, v1
    //{

    //    https://www.googleapis.com/auth/androidenterprise	Manage corporate Android devices
    //}
    //export class Google Play Developer API, v2
    //{

    //    https://www.googleapis.com/auth/androidpublisher	View and manage your Google Play Developer account
    //}
    //export class Google App Engine Admin API, v1
    //{

    //    https://www.googleapis.com/auth/appengine.admin	View and manage your applications deployed on Google App Engine
    //    https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //    https://www.googleapis.com/auth/cloud-platform.read-only	View your data across Google Cloud Platform services
    //}
    //export class G Suite Activity API, v1
    //{

    //    https://www.googleapis.com/auth/activity	View the activity history of your Google apps
    //    https://www.googleapis.com/auth/drive	View and manage the files in your Google Drive
    //    https://www.googleapis.com/auth/drive.metadata	View and manage metadata of files in your Google Drive
    //    https://www.googleapis.com/auth/drive.metadata.readonly	View metadata for files in your Google Drive
    //    https://www.googleapis.com/auth/drive.readonly	View the files in your Google Drive
    //}
    //export class Google App State API, v1
    //{

    //    https://www.googleapis.com/auth/appstate	View and manage your data for this application
    //}
    //export class BigQuery API, v2
    //{

    //    https://www.googleapis.com/auth/bigquery	View and manage your data in Google BigQuery
    //    https://www.googleapis.com/auth/bigquery.insertdata	Insert data into Google BigQuery
    //    https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //    https://www.googleapis.com/auth/cloud-platform.read-only	View your data across Google Cloud Platform services
    //    https://www.googleapis.com/auth/devstorage.full_control	Manage your data and permissions in Google Cloud Storage
    //    https://www.googleapis.com/auth/devstorage.read_only	View your data in Google Cloud Storage
    //    https://www.googleapis.com/auth/devstorage.read_write	Manage your data in Google Cloud Storage
    //}

    //export class BigQuery Data Transfer Service API, v1
    //{

    //    https://www.googleapis.com/auth/bigquery	View and manage your data in Google BigQuery
    //}

    //export class Blogger API, v3
    //{

    //    https://www.googleapis.com/auth/blogger	Manage your Blogger account
    //    https://www.googleapis.com/auth/blogger.readonly	View your Blogger account
    //}

    //export class Books API, v1
    //{

    //    https://www.googleapis.com/auth/books	Manage your books
    //}


    //    export class Google Classroom API, v1
    //    {

    //        https://www.googleapis.com/auth/classroom.courses	Manage your Google Classroom classes
    //        https://www.googleapis.com/auth/classroom.courses.readonly	View your Google Classroom classes
    //        https://www.googleapis.com/auth/classroom.coursework.me	Manage your course work and view your grades in Google Classroom
    //        https://www.googleapis.com/auth/classroom.coursework.me.readonly	View your course work and grades in Google Classroom
    //        https://www.googleapis.com/auth/classroom.coursework.students	Manage course work and grades for students in the Google Classroom classes you teach and view the course work and grades for classes you administer
    //        https://www.googleapis.com/auth/classroom.coursework.students.readonly	View course work and grades for students in the Google Classroom classes you teach or administer
    //        https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly	View your Google Classroom guardians
    //        https://www.googleapis.com/auth/classroom.guardianlinks.students	View and manage guardians for students in your Google Classroom classes
    //        https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly	View guardians for students in your Google Classroom classes
    //        https://www.googleapis.com/auth/classroom.profile.emails	View the email addresses of people in your classes
    //        https://www.googleapis.com/auth/classroom.profile.photos	View the profile photos of people in your classes
    //        https://www.googleapis.com/auth/classroom.rosters	Manage your Google Classroom class rosters
    //        https://www.googleapis.com/auth/classroom.rosters.readonly	View your Google Classroom class rosters
    //        https://www.googleapis.com/auth/classroom.student-submissions.me.readonly	View your course work and grades in Google Classroom
    //        https://www.googleapis.com/auth/classroom.student-submissions.students.readonly	View course work and grades for students in the Google Classroom classes you teach or administer
    //    }

    //    export class Google Cloud Billing API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //    }

    //    export class Google Cloud Container Builder API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //    }

    //    export class Stackdriver Debugger API, v2
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/cloud_debugger	Manage cloud debugger
    //    }

    //    export class Stackdriver Error Reporting API, v1beta1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //    }

    //    export class Google Cloud Key Management Service (KMS) API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //    }

    //    export class Cloud Monitoring API, v2beta2
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/monitoring	View and write monitoring data for all of your Google and third-party Cloud and API projects
    //    }

    //    export class Google Cloud Resource Manager API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/cloud-platform.read-only	View your data across Google Cloud Platform services
    //    }

    //    export class Stackdriver Trace API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/trace.append	Write Trace data for a project or application
    //        https://www.googleapis.com/auth/trace.readonly	Read Trace data for a project or application
    //    }

    //    export class Cloud User Accounts API, vm_alpha
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/cloud-platform.read-only	View your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/cloud.useraccounts	Manage your Google Cloud User Accounts
    //        https://www.googleapis.com/auth/cloud.useraccounts.readonly	View your Google Cloud User Accounts
    //    }

    //    export class Compute Engine API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/compute	View and manage your Google Compute Engine resources
    //        https://www.googleapis.com/auth/compute.readonly	View your Google Compute Engine resources
    //        https://www.googleapis.com/auth/devstorage.full_control	Manage your data and permissions in Google Cloud Storage
    //        https://www.googleapis.com/auth/devstorage.read_only	View your data in Google Cloud Storage
    //        https://www.googleapis.com/auth/devstorage.read_write	Manage your data in Google Cloud Storage
    //    }

    //    export class Google Container Engine API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //    }

    //    export class Content API for Shopping, v2
    //    {

    //https://www.googleapis.com/auth/content	Manage your product listings and accounts for Google Shopping
    //        }

    //export class Google Dataflow API, v1b3
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/compute	View and manage your Google Compute Engine resources
    //        https://www.googleapis.com/auth/compute.readonly	View your Google Compute Engine resources
    //        https://www.googleapis.com/auth/userinfo.email	View your email address
    //}

    //    export class Google Cloud Dataproc API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //}

    //    export class Google Cloud Datastore API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/datastore	View and manage your Google Cloud Datastore data
    //}

    //    export class Google Cloud Deployment Manager API, v2
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/cloud-platform.read-only	View your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/ndev.cloudman	View and manage your Google Cloud Platform management resources and deployment status information
    //        https://www.googleapis.com/auth/ndev.cloudman.readonly	View your Google Cloud Platform management resources and deployment status information
    //}

    //    export class DCM / DFA Reporting And Trafficking API, v2.8
    //    {

    //        https://www.googleapis.com/auth/ddmconversions	Manage DoubleClick Digital Marketing conversions
    //        https://www.googleapis.com/auth/dfareporting	View and manage DoubleClick for Advertisers reports
    //        https://www.googleapis.com/auth/dfatrafficking	View and manage your DoubleClick Campaign Manager's (DCM) display ad campaigns
    //}
    //    export class DLP API, v2beta1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //}
    //    export class Google Cloud DNS API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/cloud-platform.read-only	View your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/ndev.clouddns.readonly	View your DNS records hosted by Google Cloud DNS
    //        https://www.googleapis.com/auth/ndev.clouddns.readwrite	View and manage your DNS records hosted by Google Cloud DNS
    //}
    //    export class DoubleClick Bid Manager API, v1
    //    {

    //        https://www.googleapis.com/auth/doubleclickbidmanager	View and manage your reports in DoubleClick Bid Manager
    //}
    //    export class DoubleClick Search API, v2
    //    {

    //        https://www.googleapis.com/auth/doubleclicksearch	View and manage your advertising data in DoubleClick Search
    //}
    //    export class Drive API, v3
    //    {

    //        https://www.googleapis.com/auth/drive	View and manage the files in your Google Drive
    //        https://www.googleapis.com/auth/drive.appdata	View and manage its own configuration data in your Google Drive
    //        https://www.googleapis.com/auth/drive.file	View and manage Google Drive files and folders that you have opened or created with this app
    //        https://www.googleapis.com/auth/drive.metadata	View and manage metadata of files in your Google Drive
    //        https://www.googleapis.com/auth/drive.metadata.readonly	View metadata for files in your Google Drive
    //        https://www.googleapis.com/auth/drive.photos.readonly	View the photos, videos and albums in your Google Photos
    //        https://www.googleapis.com/auth/drive.readonly	View the files in your Google Drive
    //        https://www.googleapis.com/auth/drive.scripts	Modify your Google Apps Script scripts' behavior
    //}
    //    export class Firebase Dynamic Links API, v1
    //    {

    //        https://www.googleapis.com/auth/firebase	View and administer all your Firebase data and settings
    //}
    //    export class Firebase Rules API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/firebase	View and administer all your Firebase data and settings
    //        https://www.googleapis.com/auth/firebase.readonly	View all your Firebase data and settings
    //}
    //    export class Fitness, v1
    //    {

    //        https://www.googleapis.com/auth/fitness.activity.read	View your activity information in Google Fit
    //        https://www.googleapis.com/auth/fitness.activity.write	View and store your activity information in Google Fit
    //        https://www.googleapis.com/auth/fitness.blood_glucose.read	View blood glucose data in Google Fit
    //        https://www.googleapis.com/auth/fitness.blood_glucose.write	View and store blood glucose data in Google Fit
    //        https://www.googleapis.com/auth/fitness.blood_pressure.read	View blood pressure data in Google Fit
    //        https://www.googleapis.com/auth/fitness.blood_pressure.write	View and store blood pressure data in Google Fit
    //        https://www.googleapis.com/auth/fitness.body.read	View body sensor information in Google Fit
    //        https://www.googleapis.com/auth/fitness.body.write	View and store body sensor data in Google Fit
    //        https://www.googleapis.com/auth/fitness.body_temperature.read	View body temperature data in Google Fit
    //        https://www.googleapis.com/auth/fitness.body_temperature.write	View and store body temperature data in Google Fit
    //        https://www.googleapis.com/auth/fitness.location.read	View your stored location data in Google Fit
    //        https://www.googleapis.com/auth/fitness.location.write	View and store your location data in Google Fit
    //        https://www.googleapis.com/auth/fitness.nutrition.read	View nutrition information in Google Fit
    //        https://www.googleapis.com/auth/fitness.nutrition.write	View and store nutrition information in Google Fit
    //        https://www.googleapis.com/auth/fitness.oxygen_saturation.read	View oxygen saturation data in Google Fit
    //        https://www.googleapis.com/auth/fitness.oxygen_saturation.write	View and store oxygen saturation data in Google Fit
    //        https://www.googleapis.com/auth/fitness.reproductive_health.read	View reproductive health data in Google Fit
    //        https://www.googleapis.com/auth/fitness.reproductive_health.write	View and store reproductive health data in Google Fit
    //}
    //    export class Fusion Tables API, v2
    //    {

    //        https://www.googleapis.com/auth/fusiontables	Manage your Fusion Tables
    //        https://www.googleapis.com/auth/fusiontables.readonly	View your Fusion Tables
    //}
    //    export class Google Play Game Services API, v1
    //    {

    //        https://www.googleapis.com/auth/drive.appdata	View and manage its own configuration data in your Google Drive
    //        https://www.googleapis.com/auth/games	Share your Google+ profile information and view and manage your game activity
    //        https://www.googleapis.com/auth/plus.login	Know the list of people in your circles, your age range, and language
    //}
    //    export class Google Play Game Services Publishing API, v1configuration
    //    {

    //        https://www.googleapis.com/auth/androidpublisher	View and manage your Google Play Developer account
    //}
    //    export class Google Play Game Services Management API, v1management
    //    {

    //        https://www.googleapis.com/auth/games	Share your Google+ profile information and view and manage your game activity
    //        https://www.googleapis.com/auth/plus.login	Know the list of people in your circles, your age range, and language
    //}
    //    export class Genomics API, v1
    //    {

    //        https://www.googleapis.com/auth/bigquery	View and manage your data in Google BigQuery
    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/devstorage.read_write	Manage your data in Google Cloud Storage
    //        https://www.googleapis.com/auth/genomics	View and manage Genomics data
    //        https://www.googleapis.com/auth/genomics.readonly	View Genomics data
    //}
    //    export class Gmail API, v1
    //    {

    //        https://mail.google.com/	Read, send, delete, and manage your email
    //        https://www.googleapis.com/auth/gmail.compose	Manage drafts and send emails
    //        https://www.googleapis.com/auth/gmail.insert	Insert mail into your mailbox
    //        https://www.googleapis.com/auth/gmail.labels	Manage mailbox labels
    //        https://www.googleapis.com/auth/gmail.metadata	View your email message metadata such as labels and headers, but not the email body
    //        https://www.googleapis.com/auth/gmail.modify	View and modify but not delete your email
    //        https://www.googleapis.com/auth/gmail.readonly	View your emails messages and settings
    //        https://www.googleapis.com/auth/gmail.send	Send email on your behalf
    //        https://www.googleapis.com/auth/gmail.settings.basic	Manage your basic mail settings
    //        https://www.googleapis.com/auth/gmail.settings.sharing	Manage your sensitive mail settings, including who can manage your mail
    //}

    //    export class Groups Migration API, v1
    //    {

    //        https://www.googleapis.com/auth/apps.groups.migration	Manage messages in groups on your domain
    //}
    //    export class Groups Settings API, v1
    //    {

    //        https://www.googleapis.com/auth/apps.groups.settings	View and manage the settings of a G Suite group
    //}
    //    export class Google Identity and Access Management (IAM) API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //}
    //    export class Google Identity Toolkit API, v3
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/firebase	View and administer all your Firebase data and settings
    //}
    //    export class Google Cloud Natural Language API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //}
    //    export class Enterprise License Manager API, v1
    //    {

    //        https://www.googleapis.com/auth/apps.licensing	View and manage G Suite licenses for your domain
    //}
    //    export class Stackdriver Logging API, v2
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/cloud-platform.read-only	View your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/logging.admin	Administrate log data for your projects
    //        https://www.googleapis.com/auth/logging.read	View log data for your projects
    //        https://www.googleapis.com/auth/logging.write	Submit log data for your projects
    //}
    //    export class Manufacturer Center API, v1
    //    {

    //        https://www.googleapis.com/auth/manufacturercenter	Manage your product listings for Google Manufacturer Center
    //}
    //    export class Google Mirror API, v1
    //    {

    //        https://www.googleapis.com/auth/glass.location	View your location
    //        https://www.googleapis.com/auth/glass.timeline	View and manage your Glass timeline
    //}
    //    export class Google Cloud Machine Learning Engine, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //}
    //    export class Stackdriver Monitoring API, v3
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/monitoring	View and write monitoring data for all of your Google and third-party Cloud and API projects
    //        https://www.googleapis.com/auth/monitoring.read	View monitoring data for all of your Google Cloud and third-party projects
    //        https://www.googleapis.com/auth/monitoring.write	Publish metric data to your Google Cloud projects
    //}
    //    export class Google OAuth2 API, v2
    //    {

    //        https://www.googleapis.com/auth/plus.login	Know the list of people in your circles, your age range, and language
    //        https://www.googleapis.com/auth/plus.me	Know who you are on Google
    //        https://www.googleapis.com/auth/userinfo.email	View your email address
    //        https://www.googleapis.com/auth/userinfo.profile	View your basic profile info
    //}



    //    export class Google Play Movies Partner API, v1
    //    {

    //        https://www.googleapis.com/auth/playmovies_partner.readonly	View the digital assets you publish on Google Play Movies and TV
    //}
    //    export class Google + API, v1
    //    {

    //        https://www.googleapis.com/auth/plus.login	Know the list of people in your circles, your age range, and language
    //        https://www.googleapis.com/auth/plus.me	Know who you are on Google
    //        https://www.googleapis.com/auth/userinfo.email	View your email address
    //        https://www.googleapis.com/auth/userinfo.profile	View your basic profile info
    //}
    //    export class Google + Domains API, v1
    //    {

    //        https://www.googleapis.com/auth/plus.circles.read	View your circles and the people and pages in them
    //        https://www.googleapis.com/auth/plus.circles.write	Manage your circles and add people and pages. People and pages you add to your circles will be notified. Others may see this information publicly. People you add to circles can use Hangouts with you.
    //        https://www.googleapis.com/auth/plus.login	Know the list of people in your circles, your age range, and language
    //        https://www.googleapis.com/auth/plus.me	Know who you are on Google
    //        https://www.googleapis.com/auth/plus.media.upload	Send your photos and videos to Google+
    //        https://www.googleapis.com/auth/plus.profiles.read	View your own Google+ profile and profiles visible to you
    //        https://www.googleapis.com/auth/plus.stream.read	View your Google+ posts, comments, and stream
    //        https://www.googleapis.com/auth/plus.stream.write	Manage your Google+ posts, comments, and stream
    //        https://www.googleapis.com/auth/userinfo.email	View your email address
    //        https://www.googleapis.com/auth/userinfo.profile	View your basic profile info
    //}
    //    export class Prediction API, v1.6
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/devstorage.full_control	Manage your data and permissions in Google Cloud Storage
    //        https://www.googleapis.com/auth/devstorage.read_only	View your data in Google Cloud Storage
    //        https://www.googleapis.com/auth/devstorage.read_write	Manage your data in Google Cloud Storage
    //        https://www.googleapis.com/auth/prediction	Manage your data in the Google Prediction API
    //}
    //    export class Google Proximity Beacon API, v1beta1
    //    {

    //        https://www.googleapis.com/auth/userlocation.beacon.registry	View and modify your beacons
    //}
    //    export class Google Cloud Pub/ Sub API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/pubsub	View and manage Pub/Sub topics and subscriptions
    //}
    //    export class Google Compute Engine Instance Group Manager API, v1beta2
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/cloud-platform.read-only	View your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/compute	View and manage your Google Compute Engine resources
    //        https://www.googleapis.com/auth/compute.readonly	View your Google Compute Engine resources
    //}
    //    export class Google Compute Engine Instance Group Updater API, v1beta1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/cloud-platform.read-only	View your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/replicapool	View and manage replica pools
    //        https://www.googleapis.com/auth/replicapool.readonly	View replica pools
    //}
    //    export class Enterprise Apps Reseller API, v1
    //    {

    //        https://www.googleapis.com/auth/apps.order	Manage users on your domain
    //        https://www.googleapis.com/auth/apps.order.readonly	Manage users on your domain
    //}
    //    export class Google Compute Engine Instance Groups API, v1beta2
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/cloud-platform.read-only	View your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/compute	View and manage your Google Compute Engine resources
    //        https://www.googleapis.com/auth/compute.readonly	View your Google Compute Engine resources
    //        https://www.googleapis.com/auth/ndev.cloudman	View and manage your Google Cloud Platform management resources and deployment status information
    //        https://www.googleapis.com/auth/ndev.cloudman.readonly	View your Google Cloud Platform management resources and deployment status information
    //}
    //    export class Google Cloud Runtime Configuration API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/cloudruntimeconfig	Manage your Google Cloud Platform services' runtime configuration
    //}
    //    export class Google Apps Script Execution API, v1
    //    {

    //        https://mail.google.com/	Read, send, delete, and manage your email
    //        https://www.google.com/calendar/feeds	Manage your calendars
    //        https://www.google.com/m8/feeds	Manage your contacts
    //        https://www.googleapis.com/auth/admin.directory.group	View and manage the provisioning of groups on your domain
    //        https://www.googleapis.com/auth/admin.directory.user	View and manage the provisioning of users on your domain
    //        https://www.googleapis.com/auth/drive	View and manage the files in your Google Drive
    //        https://www.googleapis.com/auth/forms	View and manage your forms in Google Drive
    //        https://www.googleapis.com/auth/forms.currentonly	View and manage forms that this application has been installed in
    //        https://www.googleapis.com/auth/groups	View and manage your Google Groups
    //        https://www.googleapis.com/auth/spreadsheets	View and manage your spreadsheets in Google Drive
    //        https://www.googleapis.com/auth/userinfo.email	View your email address
    //}
    //    export class Google Cloud Service Control, alpha
    //    {

    //        servicecontrol	Report usage across Google managed services
    //        cloud - platform	View and manage your data across Google Cloud Platform services
    //    }
    //    export class Google Cloud Service Management, alpha
    //    {

    //        service.management	Manage your Google API service configuration
    //        cloud - platform	View and manage your data across Google Cloud Platform services
    //    }
    //    export class Google Service Control API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/servicecontrol	Manage your Google Service Control data
    //}
    //    export class Google Service Management API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/cloud-platform.read-only	View your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/service.management	Manage your Google API service configuration
    //        https://www.googleapis.com/auth/service.management.readonly	View your Google API service configuration
    //}
    //    export class Google Service User API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/cloud-platform.read-only	View your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/service.management	Manage your Google API service configuration
    //}
    //    export class Google Sheets API, v4
    //    {

    //        https://www.googleapis.com/auth/drive	View and manage the files in your Google Drive
    //        https://www.googleapis.com/auth/drive.file	View and manage Google Drive files and folders that you have opened or created with this app
    //        https://www.googleapis.com/auth/drive.readonly	View the files in your Google Drive
    //        https://www.googleapis.com/auth/spreadsheets	View and manage your spreadsheets in Google Drive
    //        https://www.googleapis.com/auth/spreadsheets.readonly	View your Google Spreadsheets
    //}
    //    export class Google Site Verification API, v1
    //    {

    //        https://www.googleapis.com/auth/siteverification	Manage the list of sites and domains you control
    //        https://www.googleapis.com/auth/siteverification.verify_only	Manage your new site verifications with Google
    //}
    //    export class Google Slides API, v1
    //    {

    //        https://www.googleapis.com/auth/drive	View and manage the files in your Google Drive
    //        https://www.googleapis.com/auth/drive.readonly	View the files in your Google Drive
    //        https://www.googleapis.com/auth/presentations	View and manage your Google Slides presentations
    //        https://www.googleapis.com/auth/presentations.readonly	View your Google Slides presentations
    //        https://www.googleapis.com/auth/spreadsheets	View and manage your spreadsheets in Google Drive
    //        https://www.googleapis.com/auth/spreadsheets.readonly	View your Google Spreadsheets
    //}
    //    export class Cloud Source Repositories API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/source.read_only	View the contents of your source code repositories
    //        https://www.googleapis.com/auth/source.read_write	Manage the contents of your source code repositories
    //}
    //    export class Cloud Spanner API, v1
    //    {

    //        https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //        https://www.googleapis.com/auth/spanner.admin	Administer your Spanner databases
    //        https://www.googleapis.com/auth/spanner.data	View and manage the contents of your Spanner databases
    //}
    //    export class Google Cloud Speech API, v1

    //    {

    //    https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //    }
    //export class Cloud SQL Administration API, v1beta4

    //    {
    //    https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //    https://www.googleapis.com/auth/sqlservice.admin	Manage your Google SQL Service instances
    //    }
    //export class Cloud Storage JSON API, v1

    //    {
    //    https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //    https://www.googleapis.com/auth/cloud-platform.read-only	View your data across Google Cloud Platform services
    //    https://www.googleapis.com/auth/devstorage.full_control	Manage your data and permissions in Google Cloud Storage
    //    https://www.googleapis.com/auth/devstorage.read_only	View your data in Google Cloud Storage
    //    https://www.googleapis.com/auth/devstorage.read_write	Manage your data in Google Cloud Storage
    //    }
    //export class Google Storage Transfer API, v1

    //    {
    //    https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //    }
    //export class Tag Manager API, v2

    //    {
    //    https://www.googleapis.com/auth/tagmanager.delete.containers	Delete your Google Tag Manager containers
    //    https://www.googleapis.com/auth/tagmanager.edit.containers	Manage your Google Tag Manager container and its subcomponents, excluding versioning and publishing
    //    https://www.googleapis.com/auth/tagmanager.edit.containerversions	Manage your Google Tag Manager container versions
    //    https://www.googleapis.com/auth/tagmanager.manage.accounts	View and manage your Google Tag Manager accounts
    //    https://www.googleapis.com/auth/tagmanager.manage.users	Manage user permissions of your Google Tag Manager account and container
    //    https://www.googleapis.com/auth/tagmanager.publish	Publish your Google Tag Manager container versions
    //    https://www.googleapis.com/auth/tagmanager.readonly	View your Google Tag Manager container and its subcomponents
    //    }
    //export class TaskQueue API, v1beta2

    //    {
    //    https://www.googleapis.com/auth/taskqueue	Manage your Tasks and Taskqueues
    //    https://www.googleapis.com/auth/taskqueue.consumer	Consume Tasks from your Taskqueues
    //    }
    //export class Tasks API, v1

    //    {
    //    https://www.googleapis.com/auth/tasks	Manage your tasks
    //    https://www.googleapis.com/auth/tasks.readonly	View your tasks
    //    }
    //export class Cloud Tool Results API, v1beta3
    //    {

    //    https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //    }
    //export class Google Tracing API, v2

    //    {
    //    https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //    https://www.googleapis.com/auth/trace.append	Write Trace data for a project or application
    //    https://www.googleapis.com/auth/trace.readonly	Read Trace data for a project or application
    //    }
    //export class Google Cloud Translation API, v2

    //    {
    //    https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //    https://www.googleapis.com/auth/cloud-translation	Translate text from one language to another using Google Translate
    //    }
    //export class URL Shortener API, v1
    //    {

    //    https://www.googleapis.com/auth/urlshortener	Manage your goo.gl short URLs
    //    }
    //export class Google Cloud Video Intelligence API, v1beta1
    //    {

    //    https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //   }
    //export class  Google Cloud Vision API, v1
    //{

    //    https://www.googleapis.com/auth/cloud-platform	View and manage your data across Google Cloud Platform services
    //    }
    //export class Search Console API, v3
    //{

    //    https://www.googleapis.com/auth/webmasters	View and manage Search Console data for your verified sites
    //    https://www.googleapis.com/auth/webmasters.readonly	View Search Console data for your verified sites
    //   }

    //export class    YouTube Reporting API, v1
    //{

    //    https://www.googleapis.com/auth/yt-analytics-monetary.readonly	View monetary and non-monetary YouTube Analytics reports for your YouTube content
    //    https://www.googleapis.com/auth/yt-analytics.readonly	View YouTube Analytics reports for your YouTube content
    //}

    export class YouTube_Data_API_v3 {
        public static youtube: Google.Scope = { Key: "youtube", URL: "https://www.googleapis.com/auth/youtube", Description: "Manage your YouTube account" };
        public static youtube_force_ssl: Google.Scope = { Key: "youtube.force-ssl", URL: "https://www.googleapis.com/auth/youtube.force-ssl", Description: "Manage your YouTube account" };
        public static youtube_readonly: Google.Scope = { Key: "youtube.readonly", URL: "https://www.googleapis.com/auth/youtube.readonly", Description: "View your YouTube account" };
        public static youtube_upload: Google.Scope = { Key: "youtube.upload", URL: "https://www.googleapis.com/auth/youtube.upload", Description: "Manage your YouTube videos" };
        public static youtubepartner: Google.Scope = { Key: "youtubepartner", URL: "https://www.googleapis.com/auth/youtubepartner", Description: "View and manage your assets and associated content on YouTube" };
        public static youtubepartner_channel_audit: Google.Scope = { Key: "youtubepartner-channel-audit", URL: "https://www.googleapis.com/auth/youtubepartner-channel-audit", Description: "" };
    }

    export class YouTube_Analytics_API_v1 {
        public static youtube: Google.Scope = { Key: "youtube", URL: "https://www.googleapis.com/auth/youtube", Description: "Manage your YouTube account" };
        public static youtube_readonly: Google.Scope = { Key: "youtube.readonly", URL: "https://www.googleapis.com/auth/youtube.readonly", Description: "View your YouTube account" };
        public static youtubepartner: Google.Scope = { Key: "youtubepartner", URL: "https://www.googleapis.com/auth/youtubepartner", Description: "View and manage your assets and associated content on YouTube" };
        public static yt_analytics_monetary_readonly: Google.Scope = { Key: "yt-analytics-monetary.readonly", URL: "https://www.googleapis.com/auth/yt-analytics-monetary.readonly", Description: "View monetary and non-monetary YouTube Analytics reports for your YouTube content" };
        public static yt_analytics_readonly: Google.Scope = { Key: "yt-analytics.readonly", URL: "https://www.googleapis.com/auth/yt-analytics.readonly", Description: "View YouTube Analytics reports for your YouTube content" };
    }
}


export class Google extends OAuth {


    private _scope: string;
    //Required.A space- delimited list of scopes that identify the resources that your application could access on the user's behalf. These values inform the consent screen that Google displays to the user.
    //Scopes enable your application to only request access to the resources that it needs while also enabling users to control the amount of access that they grant to your application.Thus, there is an inverse relationship between the number of scopes requested and the likelihood of obtaining user consent.
    //The OAuth 2.0 API Scopes document provides a full list of scopes that you might use to access Google APIs.
    //We recommend that your application request access to authorization scopes in context whenever possible.By requesting access to user data in context, via incremental authorization, you help users to more easily understand why your application needs the access it is requesting.

    private _access_type: Google.AccessType;
    //Recommended.Indicates whether your application can refresh access tokens when the user is not present at the browser.Valid parameter values are online, which is the default value, and offline.
    //Set the value to offline if your application needs to refresh access tokens when the user is not present at the browser.This is the method of refreshing access tokens described later in this document.This value instructs the Google authorization server to return a refresh token and an access token the first time that your application exchanges an authorization code for tokens.

    private _state: string;
    //Recommended.Specifies any string value that your application uses to maintain state between your authorization request and the authorization server's response. The server returns the exact value that you send as a name=value pair in the hash (#) fragment of the redirect_uri after the user consents to or denies your application's access request.
    //You can use this parameter for several purposes, such as directing the user to the correct resource in your application, sending nonces, and mitigating cross- site request forgery.Since your redirect_uri can be guessed, using a state value can increase your assurance that an incoming connection is the result of an authentication request.If you generate a random string or encode the hash of a cookie or another value that captures the client's state, you can validate the response to additionally ensure that the request and response originated in the same browser, providing protection against attacks such as cross-site request forgery. See the OpenID Connect documentation for an example of how to create and confirm a state token.

    private _include_granted_scopes: boolean;
    //Optional.Enables applications to use incremental authorization to request access to additional scopes in context.If you set this parameter's 
    // value to true and the authorization request is granted, then the new access token will also cover any scopes to which the user previously granted 
    // the application access.See the incremental authorization section for examples.

    private _login_hint: string;
    //Optional.If your application knows which user is trying to authenticate, it can use this parameter to provide a hint to the Google Authentication Server.The server uses the hint to simplify the login flow either by prefilling the email field in the sign-in form or by selecting the appropriate multi- login session.
    //Set the parameter value to an email address or sub identifier.

    private _prompt: Google.Prompt;
    //Optional.A space- delimited, case-sensitive list of prompts to present the user.If you don't specify this parameter, the user will be prompted only the first time your app requests access. Possible values are:
    ////none	Do not display any authentication or consent screens.Must not be specified with other values.
    ////consent	Prompt the user for consent.
    ////select_account	Prompt the user to select an account.

    get Scope(): string { return this._scope; };
    set Scope(value: string) {
        this._scope = value;
        this.URIBuilder.Parameters["scope"] = value;
    };

    get AccessType(): Google.AccessType { return this._access_type; };
    set AccessType(value: Google.AccessType) {
        this._access_type = value;
        this.URIBuilder.Parameters["access_type"] = Google.ToString.AccessType(value);
    };

    get State(): string { return this._state; };
    set State(value: string) {
        this._state = value;
        this.URIBuilder.Parameters["state"] = value;
    };

    get IncludeGrantedScopes(): boolean { return this._include_granted_scopes; };
    set IncludeGrantedScopes(value: boolean) {
        this._include_granted_scopes = value;
        this.URIBuilder.Parameters["include_granted_scopes"] = value;
    };

    get LoginHint(): string { return this._login_hint; };
    set LoginHint(value: string) {
        this._login_hint = value;
        this.URIBuilder.Parameters["login_hint"] = value;
    };

    get Prompt(): Google.Prompt { return this._prompt; };
    set Prompt(value: Google.Prompt) {
        this._prompt = value;
        this.URIBuilder.Parameters["prompt"] = Google.ToString.Prompt(value);
    };


    constructor(plt: Platform, iab: InAppBrowser, safariViewController: SafariViewController, deeplinks: Deeplinks) {
        super(plt, iab, safariViewController, deeplinks);

        this.URIBuilder.ClientIDFieldName = "client_id";
        this.URIBuilder.ResponseTypeFieldName = "response_type";
        this.URIBuilder.RedirectUriFieldName = "redirect_uri";

        this.Browser.Target = "_system";
        this.Browser.Options = "location=yes;toolbar=no";

        this.URIBuilder.Uri = "https://accounts.google.com/o/oauth2/v2/auth";
        this.URIBuilder.ResponseType = "code";

        this.URIBuilder.Parameters = {
            "scope": this._scope,
            "access_type": Google.ToString.AccessType(this._access_type),
            "state": this._state,
            "include_granted_scopes": this._include_granted_scopes,
            "login_hint": this._login_hint,
            "prompt": Google.ToString.Prompt(this._prompt)
        };

    }

    public Login(Routes?: {}): any {
        this.plt.ready().then(() => {
            this.Open(Routes).then((response) => {

                //Handle response from SafariViewController
                //This promise only requires if the App is running on iOS and has found safari view controller.

            });
        })
    }
}



export module Google {

    export class Scope {
        public Key: string;
        public Description: string;
        public URL: string;
    }

    export enum AccessType {
        online = 0,
        offline = 1
    }

    export enum Prompt {
        none = 0, //Do not display any authentication or consent screens. Must not be specified with other values.
        consent = 1, //Prompt the user for consent.
        select_account = 2 //Prompt the user to select an account.
    }


    export class ToString {



        public static AccessType(AT: AccessType): string {

            switch (AT) {
                case AccessType.offline: return "offline";
                case AccessType.online: return "online";
                default: return "online";
            }
        }

        public static Prompt(P: Prompt): string {

            switch (P) {
                case Prompt.consent: return "consent";
                case Prompt.none: return "none";
                case Prompt.select_account: return "select_account";
                default: return "";
            }
        }
    }

}




