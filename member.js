function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    templateUrl: 'components/member.html',
    scope: {
      member: '=',
      skills: '='
    }
  };
}