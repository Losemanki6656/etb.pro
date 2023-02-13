<template>
    <div class="body-header border-bottom d-flex py-3">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col">
                    <!-- Pretitle -->
                    <small class="text-muted">Welcome to back.</small>
                    <h1 class="h4 mt-1">Xodimlar</h1>
                </div>
                <!-- <div class="col-auto">
               <a href="https://themeforest.net/user/wrraptheme" title="Download" target="_blank"
                 class="btn btn-white border lift">Download</a>
               <button type="button" class="btn btn-dark lift">Generate Report</button>
             </div> -->
            </div>
            <!-- Row end  -->
        </div>
    </div>

    <div class="body d-flex py-lg-4 py-3">
        <div class="container-fluid">

            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0 mb-0">
                        <label class="mt-1"><input type="text" class="form-control form-control-sm" placeholder="Qidirish ..."></label>
                        <button class="btn btn-primary btn-sm mt-1"><i class="fa fa-filter me-2"></i>  Filtr</button>
                    </div>
                    <div class="card-body">
                        <table class="myDataTable table table-hover align-middle mb-0" style="width: 100%;">
                            <thead>
                                <tr>
                                    <th>Patients</th>
                                    <th>Adress</th>
                                    <th>Admited</th>
                                    <th>Discharge</th>
                                    <th>Progress</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="../assets/images/xs/avatar3.jpg" class="avatar sm rounded me-2"
                                            alt="profile-image"><span>John</span></td>
                                    <td>70 Bowman St. South Windsor, CT 06074</td>
                                    <td>Sept 13, 2020</td>
                                    <td>Sept 16, 2020</td>
                                    <td>
                                        <div class="progress" style="height: 3px;">
                                            <div class="progress-bar progress-bar-warning" role="progressbar"
                                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
                                                style="width: 40%;"> <span class="sr-only">40% Complete</span> </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-info">Admit</span></td>
                                </tr>
                                <tr>
                                    <td><img src="../assets/images/xs/avatar1.jpg" class="avatar sm rounded me-2"
                                            alt="profile-image"><span>Jack Bird</span></td>
                                    <td>123 6th St. Melbourne, FL 32904</td>
                                    <td>Sept 13, 2020</td>
                                    <td>Sept 22, 2020</td>
                                    <td>
                                        <div class="progress" style="height: 3px;">
                                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="100"
                                                aria-valuemin="0" aria-valuemax="100" style="width: 100%;"> <span
                                                    class="sr-only">100% Complete</span> </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-success">Discharge</span></td>
                                </tr>
                                <tr>
                                    <td><img src="../assets/images/xs/avatar2.jpg" class="avatar sm rounded me-2"
                                            alt="profile-image"><span>Jack Bird</span></td>
                                    <td>4 Shirley Ave. West Chicago, IL 60185</td>
                                    <td>Sept 17, 2020</td>
                                    <td>Sept 16, 2020</td>
                                    <td>
                                        <div class="progress" style="height: 3px;">
                                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="100"
                                                aria-valuemin="0" aria-valuemax="100" style="width: 100%;"> <span
                                                    class="sr-only">100% Complete</span> </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-success">Discharge</span></td>
                                </tr>
                                <tr>
                                    <td><img src="../assets/images/xs/avatar4.jpg" class="avatar sm rounded me-2"
                                            alt="profile-image"><span>Dean Otto</span></td>
                                    <td>123 6th St. Melbourne, FL 32904</td>
                                    <td>Sept 13, 2020</td>
                                    <td>Sept 23, 2020</td>
                                    <td>
                                        <div class="progress" style="height: 3px;">
                                            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="15"
                                                aria-valuemin="0" aria-valuemax="100" style="width: 15%;"> <span
                                                    class="sr-only">15% Complete</span> </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-info">Admit</span></td>
                                </tr>
                                <tr>
                                    <td><img src="../assets/images/xs/avatar5.jpg" class="avatar sm rounded me-2"
                                            alt="profile-image"><span>Hughe L.</span></td>
                                    <td>4 Shirley Ave. West Chicago, IL 60185</td>
                                    <td>Sept 18, 2020</td>
                                    <td>Sept 18, 2020</td>
                                    <td>
                                        <div class="progress" style="height: 3px;">
                                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="85"
                                                aria-valuemin="0" aria-valuemax="100" style="width: 85%;"> <span
                                                    class="sr-only">85% Complete</span> </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-info">Admit</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
export default {

}
</script>
<style lang="">
   
</style>