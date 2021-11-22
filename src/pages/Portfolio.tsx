import PortfolioSection from 'modules/Home/components/PortfolioSection';
import ServiceService from 'modules/Shared/api/ServiceService';
import { ServiceType } from 'modules/Shared/types/ServiceType';
import { useEffect, useState } from 'react';

const PortfolioPage = () => {
  const [services, setServices] = useState<ServiceType[]>([]);

  useEffect(() => {
    ServiceService.get().then((data) => {
      setServices(data);
    });
  }, []);

  return (
    <>
      {services.length > 0 && <h1>{services[0].title}</h1>}
      <PortfolioSection />
    </>
  );
};

export default PortfolioPage;
