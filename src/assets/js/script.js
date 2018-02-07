
$(document).ready(function () {
    $(".sendPackage").click(function () {
        $(".transferForm").hide();
        $(".sendForm").show();
    });
    $(".transferPackage").click(function () {
        $(".sendForm").hide();
        $(".transferForm").show();
    });
});
