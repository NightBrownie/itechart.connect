'use strict';

(function (window, undefined) {
    angular.module('itechart-connect')
        .directive('userInfoTile', function () {
            return {
                restrict: 'AE',
                templateUrl: '/javascript/app/common/directives/userInfoTile/userInfoTile.html',

                //directive scope fields
                scope: {
                    userInfo: '='
                    /*
                    expected fields are:
                    profileId,
                    name,
                    avatarImgLink,
                    skills,
                    interests
                    */
                }
            }
        });
})(window);