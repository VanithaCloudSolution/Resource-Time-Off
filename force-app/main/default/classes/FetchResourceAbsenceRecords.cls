public with sharing class FetchResourceAbsenceRecords {
    @AuraEnabled(Cacheable=true)
    public static List<ServiceResource > getServiceResources(string resName) {
        List<ServiceResource > reslist=new List<ServiceResource>();
        if(resName!=''){
            string resourceName='%'+resName+'%';
            reslist=[SELECT Id,Name FROM ServiceResource   WHERE Name LIKE :resourceName ];
        }
      return reslist;
    }
    
}