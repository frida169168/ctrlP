using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Casting
{
    public class UserTospecCast
    {
        public UserToSpecDTO CastToDTO(UserToSpec individualTospec)
        {
            return new UserToSpecDTO() { userId = individualTospec.userId, specId = individualTospec.specId };
         }
        public UserToSpec CastToDAL(UserToSpecDTO individualTospec)
        {
            return new UserToSpec() { userId = individualTospec.userId, specId = individualTospec.specId };
        }
    }
}
