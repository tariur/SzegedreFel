import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  /*
  Injektálás után ezen a kliensen keresztül lehet majd kommunikálni a saját service-eden belül. Példa egy másik service-ben:
    `
      private supabaseService = inject(Supabase)
      private supabaseClient = this.supabaseService.client;

      async getTodos(){
        const { data, error } = await this.supabaseClient.from('todos').select('*');
        stb...
      }
    `
  */
  get client() {
    return this.supabase;
  }
}
