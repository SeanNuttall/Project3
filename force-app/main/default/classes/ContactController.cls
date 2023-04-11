public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        /* return [
            SELECT FirstName, LastName, Email
            FROM Contact
            WITH USER_MODE
            ORDER BY LastName
        ]; */
        throw new AuraHandledException('Forced error');
    }
}