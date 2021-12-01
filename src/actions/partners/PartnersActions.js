export const PostPartners = (partnerObj, cb) => (
    {
    type: 'POST_PARTNERS',
    partnerObj: partnerObj,
    callback: cb,
});
export const GetProgramesList = (cb) => ({
    type: 'GET_PROGRAMES_LIST',
    callback: cb,
  });

  export const GetJobsList = (data, cb) => ({
    type: 'GET_JOB_LIST',
    startDate: data.startDate,
    endDate: data.endDate,
    programeName: data.programeName,
    partnerName: data.partnerName,
    jobStatus: data.jobStatus,
    activePage: data.activePage,
    callback: cb
  });
  export const GetDashBoardLeadsList = (data, cb) => ({
    type: 'GET_DASHBOARD_LEADS_LIST',
    startDate: data.startDate,
    endDate: data.endDate,
    activePage: data.activePage,
    callback: cb
  });
  export const GetDashBoardProgramList = (data, cb) => ({
    type: 'GET_DASHBOARD_PROGRAM_LIST',
    startDate: data.startDate,
    endDate: data.endDate,
    activePage: data.activePage,
    callback: cb
  });
  export const PostJobsList = (data, jobId, id, programeName, partnerName, cb) => ({
    type: 'POST_JOB_LIST',
    data: data,
    jobId: jobId,
    
    id: id,
    programeName: programeName,
    partnerName: partnerName,
    callback: cb
  });
  export const PostJob = (data,  cb) => ({
    type: 'POST_JOB',
    data: data,
    callback: cb,
  });


  export const ViewJobsList = (jobId,  cb) => ({
    type: 'VIEW_JOB',
    jobId: jobId,
    callback: cb,
  });

  export const ViewDupJobsList = (jobId,  cb) => ({
    type: 'VIEW_DUP_JOBS',
    jobId: jobId,
    callback: cb,
  });

  export const LeadsQualInsert = (data,  cb) => ({
    type: 'LEAD_QUAL_INSERT',
    data: data,
    callback: cb,
  });
