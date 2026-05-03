namespace Planora.API.Entities
{
    public class User
    {
        public int id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string? PassportNumber { get; set; } 
        public DateTime? BirthDate { get; set; } 
        public DateTime CreatedAt {  get; set; } = DateTime.UtcNow;
        public byte[] PasswordHash { get; set; } = Array.Empty<byte>();
        public byte[] PasswordSalt { get; set; } = Array.Empty<byte>();
    }
}
