

/**
* Generated by ExoCoding 0.0.1
*/


export const AppRoutes = () => {
  const routes: RouteObject[] = [
    { path: '/newagetemplate', element: <NewAgeTemplate /> },
    { path: '/landingpagetemplate', element: <LandingPageTemplate /> },
    { path: '/passwordtemplate', element: <PasswordTemplate /> },
    { path: '/', element: <Homepage /> },
    { path: '/logintemplate', element: <LoginTemplate /> },
    { path: '/mastertemplateABC', element: <MasterTemplate /> },
    { path: '/logintemplate', element: <LoginTemplate /> },
    { path: '/comingsoontemplate', element: <ComingSoonTemplate /> },
    { path: '/navbartemplate', element: <NavbarTemplate /> },
    { path: '/accounttemplate', element: <AccountTemplate /> },
    { path: '/resume_template', element: <Resume_Template /> },
    { path: '/dashboardtemplate', element: <DashboardTemplate /> },
    { path: '/settingstemplate', element: <SettingsTemplate ;
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
};
