﻿using System;

namespace TinkloProblemos.API.Identity.Entities
{
    public class UserLogin
    {
        public string LoginProvider { get; set; }
        public string ProviderKey { get; set; }
        public Guid UserId { get; set; }
        public string ProviderDisplayName { get; set; }
    }
}