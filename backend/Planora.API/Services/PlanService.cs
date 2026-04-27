using Planora.API.Models;

namespace Planora.API.Services
{
    public class PlanService : IPlanService
    {
        public List<Plan> GetPlans()
        {
            return new List<Plan>
            {
                new Plan
                {
                    Id = 1,
                    Title = "Spor Yap",
                    Description = "30 dakika koşu",
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now.AddHours(1),
                    IsCompleted = false
                }
            };
        }
    }
}
