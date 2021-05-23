<!DOCTYPE html>
<html lang="fr">

<head>
  @include('template.partials._head')
</head>

<body>
  <div id="app">
    <router-view></router-view>
  </div>
  @include('template.partials._scripts')
</body>

</html>